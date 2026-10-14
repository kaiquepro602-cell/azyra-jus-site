import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type ProceduralModelOptions = {
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  textureSize?: number;
  textureAnisotropy?: number;
  qualityPriority?: 'reference-fidelity' | 'balanced';
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

type SculptMaterialSpec = Record<string, any>;

function buildLatheGeometry(profile: { points: [number, number][]; segments?: number }): THREE.LatheGeometry {
  const points = profile.points.map(([x, y]) => new THREE.Vector2(Math.max(0.0001, x), y));
  return new THREE.LatheGeometry(points, profile.segments ?? 24);
}

function buildTubeGeometry(
  path: { points: [number, number, number][]; radius?: number; radialSegments?: number; closed?: boolean },
): THREE.TubeGeometry {
  const vectors = path.points.map(([x, y, z]) => new THREE.Vector3(x, y, z));
  const curve = new THREE.CatmullRomCurve3(vectors, path.closed ?? false);
  const tubularSegments = Math.max(8, path.points.length * 6);
  return new THREE.TubeGeometry(curve, tubularSegments, path.radius ?? 0.05, path.radialSegments ?? 8, path.closed ?? false);
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function readLayerNumber(value: unknown, keys: string[], fallback: number): number {
  if (typeof value === 'number') return value;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    for (const key of keys) {
      if (typeof record[key] === 'number') return record[key] as number;
    }
  }
  return fallback;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = /^#[0-9a-f]{3}$/i.test(hex)
    ? '#' + hex.slice(1).split('').map((part) => part + part).join('')
    : hex;
  const value = /^#[0-9a-f]{6}$/i.test(normalized) ? Number.parseInt(normalized.slice(1), 16) : 0x8a7a5f;
  return [clampAlbedoChannel((value >> 16) & 255), clampAlbedoChannel((value >> 8) & 255), clampAlbedoChannel(value & 255)];
}

function materialPalette(spec: SculptMaterialSpec): string[] {
  const palette = spec.colorVariation?.palette;
  if (Array.isArray(palette) && palette.length > 0) return palette.filter((value) => typeof value === 'string');
  const secondary = spec.albedo?.secondary;
  const colors = [spec.baseColor ?? spec.color ?? spec.albedo?.dominant, ...(Array.isArray(secondary) ? secondary : [])];
  return colors.filter((value): value is string => typeof value === 'string' && value.startsWith('#'));
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function clampAlbedoChannel(value: number): number {
  return Math.max(30, Math.min(240, Math.round(value)));
}

function clampPbrF0(value: number): number {
  return Math.max(0.02, Math.min(1, value));
}

function clampPbrIor(value: number): number {
  return Math.max(1, Math.min(2.5, value));
}

function clampPbrMetalness(value: number): number {
  return value >= 0.5 ? 1 : 0;
}

function clampedAlbedoColor(spec: SculptMaterialSpec): THREE.Color {
  const source = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  // setStyle with an explicit SRGBColorSpace, NOT the numeric constructor.
  //
  // `new THREE.Color(r, g, b)` treats its arguments as LINEAR working-space components,
  // while an authored `baseColor` hex is sRGB. Feeding one to the other skipped the
  // transfer function and lifted every dark albedo: #2e2a28, authored as a near-black
  // vinyl, rendered at roughly sRGB 0.46 — a mid grey. The error is largest exactly where
  // it matters most, because the transfer curve is steepest near black.
  return new THREE.Color().setStyle(source, THREE.SRGBColorSpace);
}

function smoothCurve(value: number): number {
  return value * value * (3 - 2 * value);
}

function periodicHash(x: number, y: number, seed: number, periodX: number, periodY: number): number {
  const wrappedX = ((x % periodX) + periodX) % periodX;
  const wrappedY = ((y % periodY) + periodY) % periodY;
  let value = Math.imul(wrappedX + seed * 17, 374761393) ^ Math.imul(wrappedY + seed * 31, 668265263);
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967295;
}

function periodicValueNoise(u: number, v: number, seed: number, periodX: number, periodY: number): number {
  const x = u * periodX;
  const y = v * periodY;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const tx = smoothCurve(x - x0);
  const ty = smoothCurve(y - y0);
  const a = periodicHash(x0, y0, seed, periodX, periodY);
  const b = periodicHash(x0 + 1, y0, seed, periodX, periodY);
  const c = periodicHash(x0, y0 + 1, seed, periodX, periodY);
  const d = periodicHash(x0 + 1, y0 + 1, seed, periodX, periodY);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(a, b, tx), THREE.MathUtils.lerp(c, d, tx), ty);
}

type SurfaceBand = {
  frequency: number;
  amplitude: number;
  stretchX: number;
  stretchY: number;
  ridge: boolean;
};

function surfaceBands(spec: SculptMaterialSpec): SurfaceBand[] {
  const source = Array.isArray(spec.surfaceFrequencyBands) ? spec.surfaceFrequencyBands : [];
  const parsed = source.flatMap((item: unknown) => {
    if (!item || typeof item !== 'object') return [];
    const band = item as Record<string, unknown>;
    const frequency = typeof band.frequency === 'number' ? band.frequency : 0;
    const amplitude = typeof band.amplitude === 'number' ? band.amplitude : 0;
    if (frequency <= 0 || amplitude <= 0) return [];
    const stretch = Array.isArray(band.stretch) ? band.stretch : [1, 1];
    const description = `${String(band.pattern ?? '')} ${String(band.role ?? '')}`.toLowerCase();
    return [{
      frequency,
      amplitude,
      stretchX: typeof stretch[0] === 'number' ? Math.max(0.1, stretch[0]) : 1,
      stretchY: typeof stretch[1] === 'number' ? Math.max(0.1, stretch[1]) : 1,
      ridge: /(ridge|groove|grain|fiber|striated|crack)/.test(description),
    }];
  });
  return parsed.length > 0 ? parsed : [
    { frequency: 2, amplitude: 0.42, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 12, amplitude: 0.22, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 56, amplitude: 0.08, stretchX: 1, stretchY: 1, ridge: false },
  ];
}

function sampleSurface(u: number, v: number, bands: SurfaceBand[], seed: number): number {
  let value = 0;
  let weight = 0;
  for (let index = 0; index < bands.length; index += 1) {
    const band = bands[index];
    const periodX = Math.max(1, Math.round(band.frequency * band.stretchX));
    const periodY = Math.max(1, Math.round(band.frequency * band.stretchY));
    let sample = periodicValueNoise(u, v, seed + index * 1013, periodX, periodY);
    if (band.ridge) sample = 1 - Math.abs(sample * 2 - 1);
    value += sample * band.amplitude;
    weight += band.amplitude;
  }
  return weight > 0 ? clamp01(value / weight) : 0.5;
}

function mixPalette(colors: [number, number, number][], value: number): [number, number, number] {
  if (colors.length === 1) return colors[0];
  const scaled = clamp01(value) * (colors.length - 1);
  const index = Math.min(colors.length - 2, Math.floor(scaled));
  const mix = scaled - index;
  const a = colors[index];
  const b = colors[index + 1];
  return [
    Math.round(THREE.MathUtils.lerp(a[0], b[0], mix)),
    Math.round(THREE.MathUtils.lerp(a[1], b[1], mix)),
    Math.round(THREE.MathUtils.lerp(a[2], b[2], mix)),
  ];
}

type ColorGradientStop = { offset: number; color: string };
type ColorGradientSpec = {
  type: 'linear' | 'radial';
  axis: [number, number];
  stops: ColorGradientStop[];
};

function parseRgba(value: string): [number, number, number] {
  const match = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(value);
  if (!match) return [138, 122, 95];
  return [clampAlbedoChannel(Number(match[1])), clampAlbedoChannel(Number(match[2])), clampAlbedoChannel(Number(match[3]))];
}

// Analytical per-pixel gradient sample. The extraction schema's colorGradient carries
// exact rgba(...) stop colors (see extract_part_color_recipe.py), so this samples the
// same trend directly in JS math rather than round-tripping through a Canvas 2D
// createLinearGradient/createRadialGradient object — same visual result, and it composes
// directly with the existing noise/height-correlated colorVariation blend below.
function sampleColorGradient(gradient: ColorGradientSpec, u: number, v: number): [number, number, number] {
  const stops = gradient.stops.length >= 2 ? gradient.stops : [{ offset: 0, color: 'rgba(138,122,95,1)' }, { offset: 1, color: 'rgba(138,122,95,1)' }];
  let t: number;
  if (gradient.type === 'radial') {
    const [cx, cy] = gradient.axis;
    const dx = u - cx;
    const dy = v - cy;
    const maxRadius = Math.max(0.001, Math.hypot(Math.max(cx, 1 - cx), Math.max(cy, 1 - cy)));
    t = clamp01(Math.hypot(dx, dy) / maxRadius);
  } else {
    const [ax, ay] = gradient.axis;
    const projection = (u - 0.5) * ax + (v - 0.5) * ay;
    const maxProjection = 0.5 * (Math.abs(ax) + Math.abs(ay)) || 0.5;
    t = clamp01(projection / maxProjection + 0.5);
  }
  const scaled = t * (stops.length - 1);
  const index = Math.min(stops.length - 2, Math.max(0, Math.floor(scaled)));
  const mix = scaled - index;
  const a = parseRgba(stops[index].color);
  const b = parseRgba(stops[index + 1].color);
  return [
    THREE.MathUtils.lerp(a[0], b[0], mix),
    THREE.MathUtils.lerp(a[1], b[1], mix),
    THREE.MathUtils.lerp(a[2], b[2], mix),
  ];
}

function writePixel(data: Uint8ClampedArray, offset: number, red: number, green: number, blue: number): void {
  data[offset] = Math.max(0, Math.min(255, Math.round(red)));
  data[offset + 1] = Math.max(0, Math.min(255, Math.round(green)));
  data[offset + 2] = Math.max(0, Math.min(255, Math.round(blue)));
  data[offset + 3] = 255;
}

function makeCanvas(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function createMapTexture(
  canvas: HTMLCanvasElement,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [2, 2];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 2,
    typeof repeat[1] === 'number' ? repeat[1] : 2,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

type ProceduralTextureSet = {
  albedo: THREE.Texture;
  roughness: THREE.Texture;
  height: THREE.Texture;
  normal: THREE.Texture;
  ao: THREE.Texture;
  source: 'reference-pixel-extraction' | 'procedural';
};

function referenceMapUrl(spec: SculptMaterialSpec, channel: string): string | null {
  const reference = spec.referencePbr;
  if (!reference || typeof reference !== 'object') return null;
  if (reference.usable === false) return null;
  const confidence = typeof reference.confidence === 'number'
    ? reference.confidence
    : (typeof reference.estimatedFidelity === 'number' ? reference.estimatedFidelity : 0);
  const threshold = typeof reference.targetThreshold === 'number' ? reference.targetThreshold : 0.7;
  if (confidence < threshold) return null;
  const maps = reference.maps;
  if (!maps || typeof maps !== 'object') return null;
  const map = (maps as Record<string, unknown>)[channel];
  if (!map || typeof map !== 'object') return null;
  const record = map as Record<string, unknown>;
  const url = typeof record.url === 'string' && record.url.trim() ? record.url : record.path;
  return typeof url === 'string' && url.trim() ? url : null;
}

function createLoadedMapTexture(
  url: string,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.Texture {
  const texture = new THREE.TextureLoader().load(url);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [1, 1];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 1,
    typeof repeat[1] === 'number' ? repeat[1] : 1,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

function makeReferenceTextureSet(spec: SculptMaterialSpec, options: ProceduralModelOptions): ProceduralTextureSet | null {
  const albedo = referenceMapUrl(spec, 'albedo');
  const roughness = referenceMapUrl(spec, 'roughness');
  const height = referenceMapUrl(spec, 'height');
  const normal = referenceMapUrl(spec, 'normal');
  const ao = referenceMapUrl(spec, 'ao');
  if (!albedo || !roughness || !height || !normal || !ao) return null;
  return {
    albedo: createLoadedMapTexture(albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createLoadedMapTexture(roughness, THREE.NoColorSpace, spec, options),
    height: createLoadedMapTexture(height, THREE.NoColorSpace, spec, options),
    normal: createLoadedMapTexture(normal, THREE.NoColorSpace, spec, options),
    ao: createLoadedMapTexture(ao, THREE.NoColorSpace, spec, options),
    source: 'reference-pixel-extraction',
  };
}

function makeProceduralTextureSet(
  id: string,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): ProceduralTextureSet | null {
  if (typeof document === 'undefined') return null;
  const qualityFirst = (options.qualityPriority ?? 'reference-fidelity') === 'reference-fidelity';
  const requested = options.textureSize ?? spec.textureResolution;
  const requestedSize = typeof requested === 'number' && Number.isFinite(requested)
    ? requested
    : (qualityFirst ? 1024 : 512);
  const size = Math.max(256, Math.min(2048, 2 ** Math.round(Math.log2(requestedSize))));
  const canvases = {
    albedo: makeCanvas(size),
    roughness: makeCanvas(size),
    height: makeCanvas(size),
    normal: makeCanvas(size),
    ao: makeCanvas(size),
  };
  const contexts = {
    albedo: canvases.albedo.getContext('2d'),
    roughness: canvases.roughness.getContext('2d'),
    height: canvases.height.getContext('2d'),
    normal: canvases.normal.getContext('2d'),
    ao: canvases.ao.getContext('2d'),
  };
  if (!contexts.albedo || !contexts.roughness || !contexts.height || !contexts.normal || !contexts.ao) return null;
  const images = {
    albedo: contexts.albedo.createImageData(size, size),
    roughness: contexts.roughness.createImageData(size, size),
    height: contexts.height.createImageData(size, size),
    normal: contexts.normal.createImageData(size, size),
    ao: contexts.ao.createImageData(size, size),
  };
  const seed = hashString(id);
  const bands = surfaceBands(spec);
  const heightField = new Float32Array(size * size);
  const roughnessField = new Float32Array(size * size);
  const palette = materialPalette(spec);
  const fallback = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  const colors = (palette.length >= 2 ? palette : [fallback, '#6E614B', '#A08F70']).map(hexToRgb);
  const baseRoughness = clamp01(readLayerNumber(spec.roughness, ['base'], 0.76));
  const roughnessVariation = clamp01(readLayerNumber(spec.roughness, ['variation'], 0.18));
  const colorAmplitude = clamp01(readLayerNumber(spec.colorVariation, ['amplitude', 'variation'], 0.18));
  const heightCorrelation = clamp01(readLayerNumber(spec.colorVariation, ['heightCorrelation'], 0.3));
  const colorGradient: ColorGradientSpec | undefined = spec.colorGradient;
  for (let y = 0; y < size; y += 1) {
    const v = y / size;
    for (let x = 0; x < size; x += 1) {
      const u = x / size;
      const index = y * size + x;
      const height = sampleSurface(u, v, bands, seed + 101);
      const roughNoise = sampleSurface(u, v, bands, seed + 7001);
      const colorNoise = sampleSurface(u, v, bands, seed + 15013);
      heightField[index] = height;
      roughnessField[index] = clamp01(baseRoughness + (roughNoise - 0.5) * roughnessVariation * 2);
      let color: [number, number, number];
      if (colorGradient) {
        // Evidence-derived spatial gradient (Plan 1.3 Workstream C) takes priority
        // over the noise-based palette blend below — it is a measured trend, not a guess.
        color = sampleColorGradient(colorGradient, u, v);
      } else {
        const paletteValue = clamp01(
          0.5 + (colorNoise - 0.5) * colorAmplitude * 2 + (height - 0.5) * heightCorrelation
        );
        color = mixPalette(colors, paletteValue);
      }
      writePixel(images.albedo.data, index * 4, color[0], color[1], color[2]);
    }
  }
  const normalStrength = Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35));
  const aoStrength = clamp01(readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35));
  for (let y = 0; y < size; y += 1) {
    const up = ((y - 1 + size) % size) * size;
    const down = ((y + 1) % size) * size;
    for (let x = 0; x < size; x += 1) {
      const left = (x - 1 + size) % size;
      const right = (x + 1) % size;
      const index = y * size + x;
      const center = heightField[index];
      const dx = (heightField[y * size + right] - heightField[y * size + left]) * normalStrength * 6;
      const dy = (heightField[down + x] - heightField[up + x]) * normalStrength * 6;
      const inverseLength = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const normalX = -dx * inverseLength;
      const normalY = -dy * inverseLength;
      const normalZ = inverseLength;
      const neighborAverage = (
        heightField[y * size + left] + heightField[y * size + right]
        + heightField[up + x] + heightField[down + x]
      ) * 0.25;
      const cavity = Math.max(0, neighborAverage - center);
      const ao = clamp01(1 - aoStrength * (cavity * 12 + (1 - center) * 0.16));
      const offset = index * 4;
      const heightByte = center * 255;
      const roughnessByte = roughnessField[index] * 255;
      writePixel(images.height.data, offset, heightByte, heightByte, heightByte);
      writePixel(images.roughness.data, offset, roughnessByte, roughnessByte, roughnessByte);
      writePixel(
        images.normal.data, offset,
        (normalX * 0.5 + 0.5) * 255,
        (normalY * 0.5 + 0.5) * 255,
        (normalZ * 0.5 + 0.5) * 255,
      );
      writePixel(images.ao.data, offset, ao * 255, ao * 255, ao * 255);
    }
  }
  contexts.albedo.putImageData(images.albedo, 0, 0);
  contexts.roughness.putImageData(images.roughness, 0, 0);
  contexts.height.putImageData(images.height, 0, 0);
  contexts.normal.putImageData(images.normal, 0, 0);
  contexts.ao.putImageData(images.ao, 0, 0);
  return {
    albedo: createMapTexture(canvases.albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createMapTexture(canvases.roughness, THREE.NoColorSpace, spec, options),
    height: createMapTexture(canvases.height, THREE.NoColorSpace, spec, options),
    normal: createMapTexture(canvases.normal, THREE.NoColorSpace, spec, options),
    ao: createMapTexture(canvases.ao, THREE.NoColorSpace, spec, options),
    source: 'procedural',
  };
}

function createSculptMaterial(id: string, spec: SculptMaterialSpec, options: ProceduralModelOptions, denseComponent = false): THREE.MeshPhysicalMaterial {
  // A material that declares -- with evidence -- that its subject carries no texture
  // detail gets NO texture set. Synthesising one anyway is not a harmless default: the
  // branch below then forces color to white and roughness to 1 and reads both from the
  // generated maps, so the authored albedo and the reference-derived roughness are both
  // discarded, and the model gains mottling the reference does not have. Measured on the
  // tuxedo cat, whose black fur rendered as speckled grey-and-white from a palette that
  // only ever described two flat regions.
  const textureless = (spec.textureless as { declared?: boolean } | undefined)?.declared === true;
  const textures = textureless
    ? null
    : makeReferenceTextureSet(spec, options) ?? makeProceduralTextureSet(id, spec, options);
  const material = new THREE.MeshPhysicalMaterial({
    color: textures ? 0xffffff : clampedAlbedoColor(spec),
    roughness: textures ? 1 : clamp01(readLayerNumber(spec.roughness, ['base'], 0.76)),
    metalness: clampPbrMetalness(readLayerNumber(spec.metalness, ['base'], 0.0)),
    clearcoat: clamp01(readLayerNumber(spec.clearcoat, ['base', 'amount'], 0)),
    clearcoatRoughness: clamp01(readLayerNumber(spec.clearcoatRoughness, ['base'], 0.25)),
    transmission: clamp01(readLayerNumber(spec.transmission, ['base', 'amount'], 0)),
    ior: clampPbrIor(readLayerNumber(spec.ior, ['base', 'value'], 1.5)),
    thickness: Math.max(0, readLayerNumber(spec.thickness, ['base', 'amount'], 0)),
    attenuationDistance: Math.max(0.001, readLayerNumber(spec.attenuationDistance, ['base', 'value'], Infinity)),
    attenuationColor: new THREE.Color(typeof spec.attenuationColor === 'string' ? spec.attenuationColor : '#ffffff'),
    sheen: clamp01(readLayerNumber(spec.sheen, ['base', 'amount'], 0)),
    sheenColor: new THREE.Color(typeof spec.sheenColor === 'string' ? spec.sheenColor : '#ffffff'),
    sheenRoughness: clamp01(readLayerNumber(spec.sheenRoughness, ['base'], 1.0)),
    iridescence: clamp01(readLayerNumber(spec.iridescence, ['base', 'amount'], 0)),
    iridescenceIOR: clampPbrIor(readLayerNumber(spec.iridescenceIOR, ['base', 'value'], 1.3)),
    anisotropy: clamp01(readLayerNumber(spec.anisotropy, ['base', 'amount'], 0)),
    anisotropyRotation: readLayerNumber(spec.anisotropy, ['rotation'], 0),
    specularIntensity: clampPbrF0(readLayerNumber(spec.specularF0 ?? spec.f0 ?? spec.specularIntensity, ['base', 'value'], 1.0)),
    specularColor: new THREE.Color(typeof spec.specularColor === 'string' ? spec.specularColor : '#ffffff'),
    emissive: new THREE.Color(typeof spec.emissive === 'string' ? spec.emissive : '#000000'),
    emissiveIntensity: Math.max(0, readLayerNumber(spec.emissiveIntensity, ['base'], 1.0)),
    opacity: clamp01(readLayerNumber(spec.opacity, ['base'], 1)),
    transparent: readLayerNumber(spec.transmission, ['base', 'amount'], 0) > 0 || readLayerNumber(spec.opacity, ['base'], 1) < 1,
    alphaTest: Math.max(0, readLayerNumber(spec.alpha, ['cutoff', 'alphaTest'], 0)),
    wireframe: options.wireframe ?? false,
    side: spec.doubleSided === true ? THREE.DoubleSide : THREE.FrontSide,
    flatShading: spec.flatShading === true,
  });
  if (textures) {
    material.map = textures.albedo;
    material.roughnessMap = textures.roughness;
    material.normalMap = textures.normal;
    material.normalScale.setScalar(Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35)));
    material.aoMap = textures.ao;
    material.aoMap.channel = 0;
    material.aoMapIntensity = readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35);
    const denseMesh = denseComponent || spec.denseMesh === true || spec.geometryDensity === 'dense' || spec.topologyClass === 'dense';
    const bumpScale = Math.max(0, readLayerNumber(spec.bump, ['amplitude', 'strength'], 0));
    const effectiveBumpScale = denseMesh ? Math.max(0.05, bumpScale) : bumpScale;
    if (effectiveBumpScale > 0) {
      material.bumpMap = textures.height;
      material.bumpScale = effectiveBumpScale;
    }
    const displacementScale = Math.max(0, readLayerNumber(spec.displacement, ['amplitude', 'strength'], 0));
    const effectiveDisplacementScale = denseMesh ? Math.max(0.005, displacementScale) : displacementScale;
    if (effectiveDisplacementScale > 0) {
      material.displacementMap = textures.height;
      material.displacementScale = effectiveDisplacementScale;
      material.displacementBias = -effectiveDisplacementScale * 0.5;
    }
  }
  material.envMapIntensity = readLayerNumber(spec, ['envMapIntensity'], 0.8);
  material.userData.sculptMaterial = spec;
  material.userData.proceduralMapsIndependent = true;
  material.userData.pbrConstraints = { albedoRange: [30, 240], binaryMetalness: true, f0Range: [0.02, 1], iorRange: [1, 2.5] };
  material.userData.pbrTextureSource = textures?.source ?? 'flat-fallback';
  material.userData.referencePbr = spec.referencePbr ?? null;
  material.userData.referenceMaterialId = spec.referenceMaterialId ?? spec.materialReference?.profileId ?? null;
  material.userData.materialEvidence = spec.materialEvidence ?? null;
  material.userData.validationViews = spec.materialReference?.validationViews ?? [];
  material.needsUpdate = true;
  return material;
}

type AttachmentEndpoint = {
  start: THREE.Vector3;
  midpoint: THREE.Vector3;
  quaternion: THREE.Quaternion;
  length: number;
  baseRadius: number;
  endRadius: number;
};

function readVector3(value: unknown, fallback: [number, number, number]): THREE.Vector3 {
  if (Array.isArray(value) && value.length === 3 && value.every((item) => typeof item === 'number')) {
    return new THREE.Vector3(value[0], value[1], value[2]);
  }
  return new THREE.Vector3(fallback[0], fallback[1], fallback[2]);
}

function readNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function makeAttachmentEndpoint(attachment: unknown): AttachmentEndpoint | null {
  if (!attachment || typeof attachment !== 'object') return null;
  const record = attachment as Record<string, unknown>;
  const start = readVector3(record.localStart, [0, 0, 0]);
  const end = readVector3(record.localEnd, [0, 1, 0]);
  const delta = end.clone().sub(start);
  const length = delta.length();
  if (length <= 0.0001) return null;
  const direction = delta.clone().normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  const baseRadius = Math.max(0.005, readNumber(record.baseRadius, 0.06));
  const endRadius = Math.max(0.003, readNumber(record.endRadius, baseRadius * 0.55));
  return {
    start,
    midpoint: delta.multiplyScalar(0.5),
    quaternion,
    length,
    baseRadius,
    endRadius,
  };
}

// Generated from ObjectSculptSpec target: Gold balance with curved beam chains and bullion
// Sculpt build pass: blockout
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createGoldBalanceWithCurvedBeamChainsAndBullionModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Gold balance with curved beam chains and bullion";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 36, "aspect": 1, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.2, 2.7, 12], "note": "Front review at Y 2.7, orthographic height 6.6. Side/rear/left inferred review views use same framing."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["gold"] = createSculptMaterial(
    "gold",
    {"id": "gold", "name": "gold", "type": "physical", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#d6a64c", "color": "#d6a64c", "albedo": {"dominant": "#d6a64c", "secondary": ["#c6933c", "#f2ce86"], "samplingNotes": "Textureless gold; specular image pixels are excluded from base albedo."}, "colorVariation": {"palette": ["#150B03", "#ECC92C", "#FEF695", "#B4780A", "#5A3002"], "pattern": "none", "amplitude": 0, "heightCorrelation": 0.42}, "roughness": {"base": 0.24, "variation": 0.025, "map": "none"}, "metalness": {"base": 1, "variation": 0}, "ambientOcclusion": {"cavityStrength": 0.38, "contactShadowBias": 0.35, "notes": "Reference-derived cavity estimate from local height minima; verify against grazing-light screenshot."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "gold-polish", "roughness": 0.21, "region": "exposed bevel edges", "evidenceRefs": ["full-object"]}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there.", "Reference-derived maps are estimates from image pixels; verify with neutral, grazing, and reference-matched renders.", "Do not treat baked image shadows as final albedo; rerun extraction with a tighter material crop if highlights/shadows pollute the maps."], "notes": "Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.", "textureless": {"declared": true, "evidence": ["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.", "Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},
    options
  );
  materialMap["edge-gold"] = createSculptMaterial(
    "edge-gold",
    {"id": "edge-gold", "name": "edge-gold", "type": "physical", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#edc779", "color": "#edc779", "albedo": {"dominant": "#edc779", "secondary": ["#c6933c", "#f2ce86"], "samplingNotes": "Representative gold albedo inferred without baked reflection highlights."}, "colorVariation": {"palette": ["#edc779", "#c6933c", "#f2ce86"], "pattern": "none", "amplitude": 0, "heightCorrelation": 0}, "roughness": {"base": 0.19, "variation": 0.025, "map": "none"}, "metalness": {"base": 1, "variation": 0}, "ambientOcclusion": {"cavityStrength": 0.25, "contactShadowBias": 0.35, "notes": "Darken creases, seams, intersections, and recessed local features."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "edge-gold-polish", "roughness": 0.16, "region": "exposed bevel edges", "evidenceRefs": ["full-object"]}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.", "textureless": {"declared": true, "evidence": ["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.", "Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},
    options
  );
  materialMap["bullion"] = createSculptMaterial(
    "bullion",
    {"id": "bullion", "name": "bullion", "type": "physical", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#e2b751", "color": "#e2b751", "albedo": {"dominant": "#e2b751", "secondary": ["#c6933c", "#f2ce86"], "samplingNotes": "Representative gold albedo inferred without baked reflection highlights."}, "colorVariation": {"palette": ["#e2b751", "#c6933c", "#f2ce86"], "pattern": "none", "amplitude": 0, "heightCorrelation": 0}, "roughness": {"base": 0.27, "variation": 0.025, "map": "none"}, "metalness": {"base": 1, "variation": 0}, "ambientOcclusion": {"cavityStrength": 0.25, "contactShadowBias": 0.35, "notes": "Darken creases, seams, intersections, and recessed local features."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "bullion-polish", "roughness": 0.24000000000000002, "region": "exposed bevel edges", "evidenceRefs": ["full-object"]}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Textureless polished metal. Image reflection is not baked into surface albedo; exact lighting and rear geometry are inferred.", "textureless": {"declared": true, "evidence": ["Uploaded balance illustration: column crop shows smooth specular reflected panels with no visible grain, patina, printed pattern or pores.", "Silhouette and bevel geometry define the gold surfaces. Variation in the image is dominated by lighting, not texture."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const attachment_root_0 = null;
  const endpoint_root_0 = makeAttachmentEndpoint(attachment_root_0);
  const node_root_0 = new THREE.Group();
  node_root_0.name = "root__pivot";
  node_root_0.scale.set(1, 1, 1);
  if (endpoint_root_0) {
    node_root_0.position.copy(endpoint_root_0.start);
    node_root_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_root_0.position.set(0.0, 0.08, 0.0);
    node_root_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_root_0.userData.sculptComponent = {"id": "root", "name": "root", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "radialSegments": 8}, "parent": null, "attachment": null, "dimensions": {"width": 1.28, "height": 0.16, "depth": 0.94, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.08, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "root", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "octagonal-foot", "kind": "bevel", "placement": "foot perimeter", "geometryEffect": "8-sided stepped beveled base", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_root_0.userData.actionProfile = {"animationRole": "root", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "root", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_root_0);
  nodes["root"] = node_root_0;
  const mesh_root_0Geometry = endpoint_root_0
    ? new THREE.CylinderGeometry(endpoint_root_0.endRadius, endpoint_root_0.baseRadius, endpoint_root_0.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_root_0) {
    mesh_root_0Geometry.scale(1.28, 0.16, 0.94);
  }
  const mesh_root_0 = new THREE.Mesh(
    mesh_root_0Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_root_0.name = "root";
  if (endpoint_root_0) {
    mesh_root_0.position.copy(endpoint_root_0.midpoint);
    mesh_root_0.quaternion.copy(endpoint_root_0.quaternion);
  }
  mesh_root_0.castShadow = options.castShadow ?? true;
  mesh_root_0.receiveShadow = options.receiveShadow ?? true;
  mesh_root_0.userData.sculptComponent = {"id": "root", "name": "root", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "radialSegments": 8}, "parent": null, "attachment": null, "dimensions": {"width": 1.28, "height": 0.16, "depth": 0.94, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.08, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "root", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "octagonal-foot", "kind": "bevel", "placement": "foot perimeter", "geometryEffect": "8-sided stepped beveled base", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_root_0.add(mesh_root_0);
  meshes["root"] = mesh_root_0;
  colliders["root"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["root"] ??= [];
  destructionGroups["root"].push(node_root_0);

  const attachment_foot_step_1 = {"parentId": "root", "parentSocket": "foot-step-seat", "localStart": [0, 0.17, 0], "localEnd": [0, 0.17, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]};
  const endpoint_foot_step_1 = makeAttachmentEndpoint(attachment_foot_step_1);
  const node_foot_step_1 = new THREE.Group();
  node_foot_step_1.name = "foot-step__pivot";
  node_foot_step_1.scale.set(1, 1, 1);
  if (endpoint_foot_step_1) {
    node_foot_step_1.position.copy(endpoint_foot_step_1.start);
    node_foot_step_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_foot_step_1.position.set(0.0, 0.17, 0.0);
    node_foot_step_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_foot_step_1.userData.sculptComponent = {"id": "foot-step", "name": "foot-step", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "foot-step-seat", "localStart": [0, 0.17, 0], "localEnd": [0, 0.17, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1.08, "height": 0.18, "depth": 0.8, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.17, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "foot-step", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "step-edge", "kind": "ridge", "geometryEffect": "second raised plinth", "confidence": 0.95}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_foot_step_1.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "foot-step", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_foot_step_1);
  nodes["foot-step"] = node_foot_step_1;
  const mesh_foot_step_1Geometry = endpoint_foot_step_1
    ? new THREE.CylinderGeometry(endpoint_foot_step_1.endRadius, endpoint_foot_step_1.baseRadius, endpoint_foot_step_1.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_foot_step_1) {
    mesh_foot_step_1Geometry.scale(1.08, 0.18, 0.8);
  }
  const mesh_foot_step_1 = new THREE.Mesh(
    mesh_foot_step_1Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_foot_step_1.name = "foot-step";
  if (endpoint_foot_step_1) {
    mesh_foot_step_1.position.copy(endpoint_foot_step_1.midpoint);
    mesh_foot_step_1.quaternion.copy(endpoint_foot_step_1.quaternion);
  }
  mesh_foot_step_1.castShadow = options.castShadow ?? true;
  mesh_foot_step_1.receiveShadow = options.receiveShadow ?? true;
  mesh_foot_step_1.userData.sculptComponent = {"id": "foot-step", "name": "foot-step", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "foot-step-seat", "localStart": [0, 0.17, 0], "localEnd": [0, 0.17, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1.08, "height": 0.18, "depth": 0.8, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.17, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "foot-step", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "step-edge", "kind": "ridge", "geometryEffect": "second raised plinth", "confidence": 0.95}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_foot_step_1.add(mesh_foot_step_1);
  meshes["foot-step"] = mesh_foot_step_1;
  colliders["foot-step"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["foot-step"] ??= [];
  destructionGroups["foot-step"].push(node_foot_step_1);

  const attachment_column_2 = {"parentId": "root", "parentSocket": "column-seat", "localStart": [0, 2.3, 0], "localEnd": [0, 2.3, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]};
  const endpoint_column_2 = makeAttachmentEndpoint(attachment_column_2);
  const node_column_2 = new THREE.Group();
  node_column_2.name = "column__pivot";
  node_column_2.scale.set(1, 1, 1);
  if (endpoint_column_2) {
    node_column_2.position.copy(endpoint_column_2.start);
    node_column_2.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_column_2.position.set(0.0, 2.3, 0.0);
    node_column_2.rotation.set(0.0, 0.0, 0.0);
  }
  node_column_2.userData.sculptComponent = {"id": "column", "name": "column", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "column-seat", "localStart": [0, 2.3, 0], "localEnd": [0, 2.3, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.32, "height": 4.6, "depth": 0.32, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 2.3, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "column", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "vertical-spindle", "kind": "gloss", "materialEffect": "metalness 1 roughness .24", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_column_2.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "column", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_column_2);
  nodes["column"] = node_column_2;
  const mesh_column_2Geometry = endpoint_column_2
    ? new THREE.CylinderGeometry(endpoint_column_2.endRadius, endpoint_column_2.baseRadius, endpoint_column_2.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_column_2) {
    mesh_column_2Geometry.scale(0.32, 4.6, 0.32);
  }
  const mesh_column_2 = new THREE.Mesh(
    mesh_column_2Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_column_2.name = "column";
  if (endpoint_column_2) {
    mesh_column_2.position.copy(endpoint_column_2.midpoint);
    mesh_column_2.quaternion.copy(endpoint_column_2.quaternion);
  }
  mesh_column_2.castShadow = options.castShadow ?? true;
  mesh_column_2.receiveShadow = options.receiveShadow ?? true;
  mesh_column_2.userData.sculptComponent = {"id": "column", "name": "column", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "column-seat", "localStart": [0, 2.3, 0], "localEnd": [0, 2.3, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.32, "height": 4.6, "depth": 0.32, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 2.3, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "column", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "vertical-spindle", "kind": "gloss", "materialEffect": "metalness 1 roughness .24", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_column_2.add(mesh_column_2);
  meshes["column"] = mesh_column_2;
  colliders["column"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["column"] ??= [];
  destructionGroups["column"].push(node_column_2);

  const endpoint_collar_0_3 = makeAttachmentEndpoint(null);
  const node_collar_0_3 = new THREE.Group();
  node_collar_0_3.name = "collar-0__pivot";
  node_collar_0_3.scale.set(1, 1, 1);
  if (endpoint_collar_0_3) {
    node_collar_0_3.position.copy(endpoint_collar_0_3.start);
    node_collar_0_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_collar_0_3.position.set(0.0, 0.48, 0.0);
    node_collar_0_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_collar_0_3.userData.sculptComponent = {"id": "collar-0", "name": "collar-0", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-0-seat", "localStart": [0, 0.48, 0], "localEnd": [0, 0.48, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.48, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-0", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_0_3.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_collar_0_3);
  nodes["collar-0"] = node_collar_0_3;
  const mesh_collar_0_3Geometry = endpoint_collar_0_3
    ? new THREE.CylinderGeometry(endpoint_collar_0_3.endRadius, endpoint_collar_0_3.baseRadius, endpoint_collar_0_3.length, 16, 6)
    : buildLatheGeometry({"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24});
  if (!endpoint_collar_0_3) {
    mesh_collar_0_3Geometry.scale(0.46, 0.2, 0.46);
  }
  const mesh_collar_0_3 = new THREE.Mesh(
    mesh_collar_0_3Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_collar_0_3.name = "collar-0";
  if (endpoint_collar_0_3) {
    mesh_collar_0_3.position.copy(endpoint_collar_0_3.midpoint);
    mesh_collar_0_3.quaternion.copy(endpoint_collar_0_3.quaternion);
  }
  mesh_collar_0_3.castShadow = options.castShadow ?? true;
  mesh_collar_0_3.receiveShadow = options.receiveShadow ?? true;
  mesh_collar_0_3.userData.sculptComponent = {"id": "collar-0", "name": "collar-0", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-0-seat", "localStart": [0, 0.48, 0], "localEnd": [0, 0.48, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.48, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-0", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_0_3.add(mesh_collar_0_3);
  meshes["collar-0"] = mesh_collar_0_3;
  colliders["collar-0"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["collar-0"] ??= [];
  destructionGroups["collar-0"].push(node_collar_0_3);

  const endpoint_collar_1_4 = makeAttachmentEndpoint(null);
  const node_collar_1_4 = new THREE.Group();
  node_collar_1_4.name = "collar-1__pivot";
  node_collar_1_4.scale.set(1, 1, 1);
  if (endpoint_collar_1_4) {
    node_collar_1_4.position.copy(endpoint_collar_1_4.start);
    node_collar_1_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_collar_1_4.position.set(0.0, 0.83, 0.0);
    node_collar_1_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_collar_1_4.userData.sculptComponent = {"id": "collar-1", "name": "collar-1", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-1-seat", "localStart": [0, 0.83, 0], "localEnd": [0, 0.83, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.83, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-1", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_1_4.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_collar_1_4);
  nodes["collar-1"] = node_collar_1_4;
  const mesh_collar_1_4Geometry = endpoint_collar_1_4
    ? new THREE.CylinderGeometry(endpoint_collar_1_4.endRadius, endpoint_collar_1_4.baseRadius, endpoint_collar_1_4.length, 16, 6)
    : buildLatheGeometry({"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24});
  if (!endpoint_collar_1_4) {
    mesh_collar_1_4Geometry.scale(0.46, 0.2, 0.46);
  }
  const mesh_collar_1_4 = new THREE.Mesh(
    mesh_collar_1_4Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_collar_1_4.name = "collar-1";
  if (endpoint_collar_1_4) {
    mesh_collar_1_4.position.copy(endpoint_collar_1_4.midpoint);
    mesh_collar_1_4.quaternion.copy(endpoint_collar_1_4.quaternion);
  }
  mesh_collar_1_4.castShadow = options.castShadow ?? true;
  mesh_collar_1_4.receiveShadow = options.receiveShadow ?? true;
  mesh_collar_1_4.userData.sculptComponent = {"id": "collar-1", "name": "collar-1", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-1-seat", "localStart": [0, 0.83, 0], "localEnd": [0, 0.83, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.83, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-1", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_1_4.add(mesh_collar_1_4);
  meshes["collar-1"] = mesh_collar_1_4;
  colliders["collar-1"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["collar-1"] ??= [];
  destructionGroups["collar-1"].push(node_collar_1_4);

  const endpoint_collar_2_5 = makeAttachmentEndpoint(null);
  const node_collar_2_5 = new THREE.Group();
  node_collar_2_5.name = "collar-2__pivot";
  node_collar_2_5.scale.set(1, 1, 1);
  if (endpoint_collar_2_5) {
    node_collar_2_5.position.copy(endpoint_collar_2_5.start);
    node_collar_2_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_collar_2_5.position.set(0.0, 3.62, 0.0);
    node_collar_2_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_collar_2_5.userData.sculptComponent = {"id": "collar-2", "name": "collar-2", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-2-seat", "localStart": [0, 3.62, 0], "localEnd": [0, 3.62, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 3.62, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-2", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_2_5.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_collar_2_5);
  nodes["collar-2"] = node_collar_2_5;
  const mesh_collar_2_5Geometry = endpoint_collar_2_5
    ? new THREE.CylinderGeometry(endpoint_collar_2_5.endRadius, endpoint_collar_2_5.baseRadius, endpoint_collar_2_5.length, 16, 6)
    : buildLatheGeometry({"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24});
  if (!endpoint_collar_2_5) {
    mesh_collar_2_5Geometry.scale(0.46, 0.2, 0.46);
  }
  const mesh_collar_2_5 = new THREE.Mesh(
    mesh_collar_2_5Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_collar_2_5.name = "collar-2";
  if (endpoint_collar_2_5) {
    mesh_collar_2_5.position.copy(endpoint_collar_2_5.midpoint);
    mesh_collar_2_5.quaternion.copy(endpoint_collar_2_5.quaternion);
  }
  mesh_collar_2_5.castShadow = options.castShadow ?? true;
  mesh_collar_2_5.receiveShadow = options.receiveShadow ?? true;
  mesh_collar_2_5.userData.sculptComponent = {"id": "collar-2", "name": "collar-2", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-2-seat", "localStart": [0, 3.62, 0], "localEnd": [0, 3.62, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 3.62, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-2", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_2_5.add(mesh_collar_2_5);
  meshes["collar-2"] = mesh_collar_2_5;
  colliders["collar-2"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["collar-2"] ??= [];
  destructionGroups["collar-2"].push(node_collar_2_5);

  const endpoint_collar_3_6 = makeAttachmentEndpoint(null);
  const node_collar_3_6 = new THREE.Group();
  node_collar_3_6.name = "collar-3__pivot";
  node_collar_3_6.scale.set(1, 1, 1);
  if (endpoint_collar_3_6) {
    node_collar_3_6.position.copy(endpoint_collar_3_6.start);
    node_collar_3_6.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_collar_3_6.position.set(0.0, 4.04, 0.0);
    node_collar_3_6.rotation.set(0.0, 0.0, 0.0);
  }
  node_collar_3_6.userData.sculptComponent = {"id": "collar-3", "name": "collar-3", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-3-seat", "localStart": [0, 4.04, 0], "localEnd": [0, 4.04, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.04, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-3", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-3", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_3_6.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-3", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_collar_3_6);
  nodes["collar-3"] = node_collar_3_6;
  const mesh_collar_3_6Geometry = endpoint_collar_3_6
    ? new THREE.CylinderGeometry(endpoint_collar_3_6.endRadius, endpoint_collar_3_6.baseRadius, endpoint_collar_3_6.length, 16, 6)
    : buildLatheGeometry({"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24});
  if (!endpoint_collar_3_6) {
    mesh_collar_3_6Geometry.scale(0.46, 0.2, 0.46);
  }
  const mesh_collar_3_6 = new THREE.Mesh(
    mesh_collar_3_6Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_collar_3_6.name = "collar-3";
  if (endpoint_collar_3_6) {
    mesh_collar_3_6.position.copy(endpoint_collar_3_6.midpoint);
    mesh_collar_3_6.quaternion.copy(endpoint_collar_3_6.quaternion);
  }
  mesh_collar_3_6.castShadow = options.castShadow ?? true;
  mesh_collar_3_6.receiveShadow = options.receiveShadow ?? true;
  mesh_collar_3_6.userData.sculptComponent = {"id": "collar-3", "name": "collar-3", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-3-seat", "localStart": [0, 4.04, 0], "localEnd": [0, 4.04, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.04, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-3", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-3", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_3_6.add(mesh_collar_3_6);
  meshes["collar-3"] = mesh_collar_3_6;
  colliders["collar-3"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["collar-3"] ??= [];
  destructionGroups["collar-3"].push(node_collar_3_6);

  const endpoint_collar_4_7 = makeAttachmentEndpoint(null);
  const node_collar_4_7 = new THREE.Group();
  node_collar_4_7.name = "collar-4__pivot";
  node_collar_4_7.scale.set(1, 1, 1);
  if (endpoint_collar_4_7) {
    node_collar_4_7.position.copy(endpoint_collar_4_7.start);
    node_collar_4_7.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_collar_4_7.position.set(0.0, 4.51, 0.0);
    node_collar_4_7.rotation.set(0.0, 0.0, 0.0);
  }
  node_collar_4_7.userData.sculptComponent = {"id": "collar-4", "name": "collar-4", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-4-seat", "localStart": [0, 4.51, 0], "localEnd": [0, 4.51, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.51, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-4", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-4", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_4_7.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-4", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_collar_4_7);
  nodes["collar-4"] = node_collar_4_7;
  const mesh_collar_4_7Geometry = endpoint_collar_4_7
    ? new THREE.CylinderGeometry(endpoint_collar_4_7.endRadius, endpoint_collar_4_7.baseRadius, endpoint_collar_4_7.length, 16, 6)
    : buildLatheGeometry({"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24});
  if (!endpoint_collar_4_7) {
    mesh_collar_4_7Geometry.scale(0.46, 0.2, 0.46);
  }
  const mesh_collar_4_7 = new THREE.Mesh(
    mesh_collar_4_7Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_collar_4_7.name = "collar-4";
  if (endpoint_collar_4_7) {
    mesh_collar_4_7.position.copy(endpoint_collar_4_7.midpoint);
    mesh_collar_4_7.quaternion.copy(endpoint_collar_4_7.quaternion);
  }
  mesh_collar_4_7.castShadow = options.castShadow ?? true;
  mesh_collar_4_7.receiveShadow = options.receiveShadow ?? true;
  mesh_collar_4_7.userData.sculptComponent = {"id": "collar-4", "name": "collar-4", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-4-seat", "localStart": [0, 4.51, 0], "localEnd": [0, 4.51, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.51, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-4", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-4", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_4_7.add(mesh_collar_4_7);
  meshes["collar-4"] = mesh_collar_4_7;
  colliders["collar-4"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["collar-4"] ??= [];
  destructionGroups["collar-4"].push(node_collar_4_7);

  const endpoint_collar_5_8 = makeAttachmentEndpoint(null);
  const node_collar_5_8 = new THREE.Group();
  node_collar_5_8.name = "collar-5__pivot";
  node_collar_5_8.scale.set(1, 1, 1);
  if (endpoint_collar_5_8) {
    node_collar_5_8.position.copy(endpoint_collar_5_8.start);
    node_collar_5_8.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_collar_5_8.position.set(0.0, 4.91, 0.0);
    node_collar_5_8.rotation.set(0.0, 0.0, 0.0);
  }
  node_collar_5_8.userData.sculptComponent = {"id": "collar-5", "name": "collar-5", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-5-seat", "localStart": [0, 4.91, 0], "localEnd": [0, 4.91, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.91, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-5", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-5", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_5_8.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-5", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_collar_5_8);
  nodes["collar-5"] = node_collar_5_8;
  const mesh_collar_5_8Geometry = endpoint_collar_5_8
    ? new THREE.CylinderGeometry(endpoint_collar_5_8.endRadius, endpoint_collar_5_8.baseRadius, endpoint_collar_5_8.length, 16, 6)
    : buildLatheGeometry({"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24});
  if (!endpoint_collar_5_8) {
    mesh_collar_5_8Geometry.scale(0.46, 0.2, 0.46);
  }
  const mesh_collar_5_8 = new THREE.Mesh(
    mesh_collar_5_8Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_collar_5_8.name = "collar-5";
  if (endpoint_collar_5_8) {
    mesh_collar_5_8.position.copy(endpoint_collar_5_8.midpoint);
    mesh_collar_5_8.quaternion.copy(endpoint_collar_5_8.quaternion);
  }
  mesh_collar_5_8.castShadow = options.castShadow ?? true;
  mesh_collar_5_8.receiveShadow = options.receiveShadow ?? true;
  mesh_collar_5_8.userData.sculptComponent = {"id": "collar-5", "name": "collar-5", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.15, -0.5], [0.42, -0.48], [0.5, -0.15], [0.5, 0.15], [0.42, 0.48], [0.15, 0.5]], "segments": 24}}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "collar-5-seat", "localStart": [0, 4.91, 0], "localEnd": [0, 4.91, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.46, "height": 0.2, "depth": 0.46, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.91, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "collar-5", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "turned-band-5", "kind": "ridge", "geometryEffect": "rounded turned spindle collar", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_collar_5_8.add(mesh_collar_5_8);
  meshes["collar-5"] = mesh_collar_5_8;
  colliders["collar-5"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["collar-5"] ??= [];
  destructionGroups["collar-5"].push(node_collar_5_8);

  const endpoint_finial_9 = makeAttachmentEndpoint(null);
  const node_finial_9 = new THREE.Group();
  node_finial_9.name = "finial__pivot";
  node_finial_9.scale.set(1, 1, 1);
  if (endpoint_finial_9) {
    node_finial_9.position.copy(endpoint_finial_9.start);
    node_finial_9.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_finial_9.position.set(0.0, 5.09, 0.0);
    node_finial_9.rotation.set(0.0, 0.0, 0.0);
  }
  node_finial_9.userData.sculptComponent = {"id": "finial", "name": "finial", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "sphere", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "finial-seat", "localStart": [0, 5.18, 0], "localEnd": [0, 5.18, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.34, "height": 0.38, "depth": 0.34, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 5.09, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "finial", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "finial-crown", "kind": "contour", "geometryEffect": "rounded upper crown", "confidence": 0.95}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_finial_9.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "finial", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_finial_9);
  nodes["finial"] = node_finial_9;
  const mesh_finial_9Geometry = endpoint_finial_9
    ? new THREE.CylinderGeometry(endpoint_finial_9.endRadius, endpoint_finial_9.baseRadius, endpoint_finial_9.length, 16, 6)
    : new THREE.SphereGeometry(0.5, 32, 20);
  if (!endpoint_finial_9) {
    mesh_finial_9Geometry.scale(0.34, 0.38, 0.34);
  }
  const mesh_finial_9 = new THREE.Mesh(
    mesh_finial_9Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_finial_9.name = "finial";
  if (endpoint_finial_9) {
    mesh_finial_9.position.copy(endpoint_finial_9.midpoint);
    mesh_finial_9.quaternion.copy(endpoint_finial_9.quaternion);
  }
  mesh_finial_9.castShadow = options.castShadow ?? true;
  mesh_finial_9.receiveShadow = options.receiveShadow ?? true;
  mesh_finial_9.userData.sculptComponent = {"id": "finial", "name": "finial", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "sphere", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "finial-seat", "localStart": [0, 5.18, 0], "localEnd": [0, 5.18, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.34, "height": 0.38, "depth": 0.34, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 5.09, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "finial", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "finial-crown", "kind": "contour", "geometryEffect": "rounded upper crown", "confidence": 0.95}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_finial_9.add(mesh_finial_9);
  meshes["finial"] = mesh_finial_9;
  colliders["finial"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["finial"] ??= [];
  destructionGroups["finial"].push(node_finial_9);

  const attachment_beam_10 = {"parentId": "root", "parentSocket": "beam-seat", "localStart": [0, 4.29, 0], "localEnd": [0, 4.29, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]};
  const endpoint_beam_10 = makeAttachmentEndpoint(attachment_beam_10);
  const node_beam_10 = new THREE.Group();
  node_beam_10.name = "beam__pivot";
  node_beam_10.scale.set(1, 1, 1);
  if (endpoint_beam_10) {
    node_beam_10.position.copy(endpoint_beam_10.start);
    node_beam_10.rotation.set(0.0, 0.0, 0.08);
  } else {
    node_beam_10.position.set(0.0, 4.29, 0.0);
    node_beam_10.rotation.set(0.0, 0.0, 0.08);
  }
  node_beam_10.userData.sculptComponent = {"id": "beam", "name": "beam", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[-1.58, -0.28, 0], [-1.22, -0.2, 0], [-0.79, 0.16, 0], [0, 0.27, 0], [0.79, 0.16, 0], [1.22, -0.2, 0], [1.58, -0.28, 0]], "radius": 0.075, "radialSegments": 12}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "beam-seat", "localStart": [0, 4.29, 0], "localEnd": [0, 4.29, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.29, 0], "rotation": [0, 0, 0.08]}, "actionProfile": {"animationRole": "hinge", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "compound", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "beam", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "curved-beam", "kind": "contour", "geometryEffect": "curved tube sweeps with raised central beam", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_beam_10.userData.actionProfile = {"animationRole": "hinge", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "compound", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "beam", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_beam_10);
  nodes["beam"] = node_beam_10;
  const mesh_beam_10Geometry = endpoint_beam_10
    ? new THREE.CylinderGeometry(endpoint_beam_10.endRadius, endpoint_beam_10.baseRadius, endpoint_beam_10.length, 16, 6)
    : buildTubeGeometry({"points": [[-1.58, -0.28, 0], [-1.22, -0.2, 0], [-0.79, 0.16, 0], [0, 0.27, 0], [0.79, 0.16, 0], [1.22, -0.2, 0], [1.58, -0.28, 0]], "radius": 0.075, "radialSegments": 12});
  if (!endpoint_beam_10) {
    mesh_beam_10Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_beam_10 = new THREE.Mesh(
    mesh_beam_10Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_beam_10.name = "beam";
  if (endpoint_beam_10) {
    mesh_beam_10.position.copy(endpoint_beam_10.midpoint);
    mesh_beam_10.quaternion.copy(endpoint_beam_10.quaternion);
  }
  mesh_beam_10.castShadow = options.castShadow ?? true;
  mesh_beam_10.receiveShadow = options.receiveShadow ?? true;
  mesh_beam_10.userData.sculptComponent = {"id": "beam", "name": "beam", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[-1.58, -0.28, 0], [-1.22, -0.2, 0], [-0.79, 0.16, 0], [0, 0.27, 0], [0.79, 0.16, 0], [1.22, -0.2, 0], [1.58, -0.28, 0]], "radius": 0.075, "radialSegments": 12}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "beam-seat", "localStart": [0, 4.29, 0], "localEnd": [0, 4.29, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 4.29, 0], "rotation": [0, 0, 0.08]}, "actionProfile": {"animationRole": "hinge", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "compound", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "beam", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "curved-beam", "kind": "contour", "geometryEffect": "curved tube sweeps with raised central beam", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_beam_10.add(mesh_beam_10);
  meshes["beam"] = mesh_beam_10;
  colliders["beam"] = {"type": "compound", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["beam"] ??= [];
  destructionGroups["beam"].push(node_beam_10);

  const attachment_beam_center_11 = {"parentId": "beam", "parentSocket": "beam-center-seat", "localStart": [0, 0.26, 0], "localEnd": [0, 0.26, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]};
  const endpoint_beam_center_11 = makeAttachmentEndpoint(attachment_beam_center_11);
  const node_beam_center_11 = new THREE.Group();
  node_beam_center_11.name = "beam-center__pivot";
  node_beam_center_11.scale.set(1, 1, 1);
  if (endpoint_beam_center_11) {
    node_beam_center_11.position.copy(endpoint_beam_center_11.start);
    node_beam_center_11.rotation.set(0.0, 0.0, 1.5707963267948966);
  } else {
    node_beam_center_11.position.set(0.0, 0.26, 0.0);
    node_beam_center_11.rotation.set(0.0, 0.0, 1.5707963267948966);
  }
  node_beam_center_11.userData.sculptComponent = {"id": "beam-center", "name": "beam-center", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "beam", "attachment": {"parentId": "beam", "parentSocket": "beam-center-seat", "localStart": [0, 0.26, 0], "localEnd": [0, 0.26, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.23, "height": 1.14, "depth": 0.23, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.26, 0], "rotation": [0, 0, 1.5707963267948966]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "beam-center", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "edge-gold", "materialLayers": ["edge-gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "crossbar-sleeve", "kind": "gloss", "materialEffect": "polished horizontal sleeve", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_beam_center_11.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "beam-center", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["beam"] ?? root).add(node_beam_center_11);
  nodes["beam-center"] = node_beam_center_11;
  const mesh_beam_center_11Geometry = endpoint_beam_center_11
    ? new THREE.CylinderGeometry(endpoint_beam_center_11.endRadius, endpoint_beam_center_11.baseRadius, endpoint_beam_center_11.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_beam_center_11) {
    mesh_beam_center_11Geometry.scale(0.23, 1.14, 0.23);
  }
  const mesh_beam_center_11 = new THREE.Mesh(
    mesh_beam_center_11Geometry,
    materialMap["edge-gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_beam_center_11.name = "beam-center";
  if (endpoint_beam_center_11) {
    mesh_beam_center_11.position.copy(endpoint_beam_center_11.midpoint);
    mesh_beam_center_11.quaternion.copy(endpoint_beam_center_11.quaternion);
  }
  mesh_beam_center_11.castShadow = options.castShadow ?? true;
  mesh_beam_center_11.receiveShadow = options.receiveShadow ?? true;
  mesh_beam_center_11.userData.sculptComponent = {"id": "beam-center", "name": "beam-center", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "beam", "attachment": {"parentId": "beam", "parentSocket": "beam-center-seat", "localStart": [0, 0.26, 0], "localEnd": [0, 0.26, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.23, "height": 1.14, "depth": 0.23, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.26, 0], "rotation": [0, 0, 1.5707963267948966]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "beam-center", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "edge-gold", "materialLayers": ["edge-gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "crossbar-sleeve", "kind": "gloss", "materialEffect": "polished horizontal sleeve", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_beam_center_11.add(mesh_beam_center_11);
  meshes["beam-center"] = mesh_beam_center_11;
  colliders["beam-center"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["beam-center"] ??= [];
  destructionGroups["beam-center"].push(node_beam_center_11);

  const endpoint_pan_left_12 = makeAttachmentEndpoint(null);
  const node_pan_left_12 = new THREE.Group();
  node_pan_left_12.name = "pan-left__pivot";
  node_pan_left_12.scale.set(1, 1, 1);
  if (endpoint_pan_left_12) {
    node_pan_left_12.position.copy(endpoint_pan_left_12.start);
    node_pan_left_12.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_pan_left_12.position.set(-1.57, 1.3499999999999999, 0.0);
    node_pan_left_12.rotation.set(0.0, 0.0, 0.0);
  }
  node_pan_left_12.userData.sculptComponent = {"id": "pan-left", "name": "pan-left", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0, -0.11], [0.45, -0.105], [0.66, -0.05], [0.75, 0.06], [0.77, 0.09], [0.75, 0.105], [0.7, 0.085], [0.59, -0.025], [0.43, -0.058], [0, -0.06]], "segments": 48}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "pan-left-seat", "localStart": [-1.57, 1.3499999999999999, 0], "localEnd": [-1.57, 1.3499999999999999, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 1.3499999999999999, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "pan-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bowl-left", "kind": "hole", "geometryEffect": "open shallow bowl with returned wall thickness", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_pan_left_12.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "pan-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_pan_left_12);
  nodes["pan-left"] = node_pan_left_12;
  const mesh_pan_left_12Geometry = endpoint_pan_left_12
    ? new THREE.CylinderGeometry(endpoint_pan_left_12.endRadius, endpoint_pan_left_12.baseRadius, endpoint_pan_left_12.length, 16, 6)
    : buildLatheGeometry({"points": [[0, -0.11], [0.45, -0.105], [0.66, -0.05], [0.75, 0.06], [0.77, 0.09], [0.75, 0.105], [0.7, 0.085], [0.59, -0.025], [0.43, -0.058], [0, -0.06]], "segments": 48});
  if (!endpoint_pan_left_12) {
    mesh_pan_left_12Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_pan_left_12 = new THREE.Mesh(
    mesh_pan_left_12Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_pan_left_12.name = "pan-left";
  if (endpoint_pan_left_12) {
    mesh_pan_left_12.position.copy(endpoint_pan_left_12.midpoint);
    mesh_pan_left_12.quaternion.copy(endpoint_pan_left_12.quaternion);
  }
  mesh_pan_left_12.castShadow = options.castShadow ?? true;
  mesh_pan_left_12.receiveShadow = options.receiveShadow ?? true;
  mesh_pan_left_12.userData.sculptComponent = {"id": "pan-left", "name": "pan-left", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0, -0.11], [0.45, -0.105], [0.66, -0.05], [0.75, 0.06], [0.77, 0.09], [0.75, 0.105], [0.7, 0.085], [0.59, -0.025], [0.43, -0.058], [0, -0.06]], "segments": 48}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "pan-left-seat", "localStart": [-1.57, 1.3499999999999999, 0], "localEnd": [-1.57, 1.3499999999999999, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 1.3499999999999999, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "pan-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bowl-left", "kind": "hole", "geometryEffect": "open shallow bowl with returned wall thickness", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_pan_left_12.add(mesh_pan_left_12);
  meshes["pan-left"] = mesh_pan_left_12;
  colliders["pan-left"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["pan-left"] ??= [];
  destructionGroups["pan-left"].push(node_pan_left_12);

  const endpoint_rim_left_13 = makeAttachmentEndpoint(null);
  const node_rim_left_13 = new THREE.Group();
  node_rim_left_13.name = "rim-left__pivot";
  node_rim_left_13.scale.set(1, 1, 1);
  if (endpoint_rim_left_13) {
    node_rim_left_13.position.copy(endpoint_rim_left_13.start);
    node_rim_left_13.rotation.set(1.5707963267948966, 0.0, 0.0);
  } else {
    node_rim_left_13.position.set(0.0, 0.097, 0.0);
    node_rim_left_13.rotation.set(1.5707963267948966, 0.0, 0.0);
  }
  node_rim_left_13.userData.sculptComponent = {"id": "rim-left", "name": "rim-left", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "torus", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "pan-left", "attachment": {"parentId": "pan-left", "parentSocket": "rim-left-seat", "localStart": [0, 0.097, 0], "localEnd": [0, 0.097, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1.55, "height": 1.55, "depth": 0.026, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.097, 0], "rotation": [1.5707963267948966, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "rim-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "edge-gold", "materialLayers": ["edge-gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rim-bead-left", "kind": "ridge", "geometryEffect": "thin circular rim accent", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_rim_left_13.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "rim-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["pan-left"] ?? root).add(node_rim_left_13);
  nodes["rim-left"] = node_rim_left_13;
  const mesh_rim_left_13Geometry = endpoint_rim_left_13
    ? new THREE.CylinderGeometry(endpoint_rim_left_13.endRadius, endpoint_rim_left_13.baseRadius, endpoint_rim_left_13.length, 16, 6)
    : new THREE.TorusGeometry(0.45, 0.08, 12, 48);
  if (!endpoint_rim_left_13) {
    mesh_rim_left_13Geometry.scale(1.55, 1.55, 0.026);
  }
  const mesh_rim_left_13 = new THREE.Mesh(
    mesh_rim_left_13Geometry,
    materialMap["edge-gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_rim_left_13.name = "rim-left";
  if (endpoint_rim_left_13) {
    mesh_rim_left_13.position.copy(endpoint_rim_left_13.midpoint);
    mesh_rim_left_13.quaternion.copy(endpoint_rim_left_13.quaternion);
  }
  mesh_rim_left_13.castShadow = options.castShadow ?? true;
  mesh_rim_left_13.receiveShadow = options.receiveShadow ?? true;
  mesh_rim_left_13.userData.sculptComponent = {"id": "rim-left", "name": "rim-left", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "torus", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "pan-left", "attachment": {"parentId": "pan-left", "parentSocket": "rim-left-seat", "localStart": [0, 0.097, 0], "localEnd": [0, 0.097, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1.55, "height": 1.55, "depth": 0.026, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.097, 0], "rotation": [1.5707963267948966, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "rim-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "edge-gold", "materialLayers": ["edge-gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rim-bead-left", "kind": "ridge", "geometryEffect": "thin circular rim accent", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_rim_left_13.add(mesh_rim_left_13);
  meshes["rim-left"] = mesh_rim_left_13;
  colliders["rim-left"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["rim-left"] ??= [];
  destructionGroups["rim-left"].push(node_rim_left_13);

  const attachment_chain_left_0_14 = {"parentId": "root", "parentSocket": "chain-left-0-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-0.9464617092752042, 1.43, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015};
  const endpoint_chain_left_0_14 = makeAttachmentEndpoint(attachment_chain_left_0_14);
  const node_chain_left_0_14 = new THREE.Group();
  node_chain_left_0_14.name = "chain-left-0__pivot";
  node_chain_left_0_14.scale.set(1, 1, 1);
  if (endpoint_chain_left_0_14) {
    node_chain_left_0_14.position.copy(endpoint_chain_left_0_14.start);
    node_chain_left_0_14.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_chain_left_0_14.position.set(-1.57, 3.8844, 0.0);
    node_chain_left_0_14.rotation.set(0.0, 0.0, 0.0);
  }
  node_chain_left_0_14.userData.sculptComponent = {"id": "chain-left-0", "name": "chain-left-0", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [0.6235382907247958, -2.4543999999999997, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-left-0-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-0.9464617092752042, 1.43, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 3.8844, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-left-0", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_left_0_14.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_chain_left_0_14);
  nodes["chain-left-0"] = node_chain_left_0_14;
  const mesh_chain_left_0_14Geometry = endpoint_chain_left_0_14
    ? new THREE.CylinderGeometry(endpoint_chain_left_0_14.endRadius, endpoint_chain_left_0_14.baseRadius, endpoint_chain_left_0_14.length, 16, 6)
    : buildTubeGeometry({"points": [[0, 0, 0], [0.6235382907247958, -2.4543999999999997, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6});
  if (!endpoint_chain_left_0_14) {
    mesh_chain_left_0_14Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_chain_left_0_14 = new THREE.Mesh(
    mesh_chain_left_0_14Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_chain_left_0_14.name = "chain-left-0";
  if (endpoint_chain_left_0_14) {
    mesh_chain_left_0_14.position.copy(endpoint_chain_left_0_14.midpoint);
    mesh_chain_left_0_14.quaternion.copy(endpoint_chain_left_0_14.quaternion);
  }
  mesh_chain_left_0_14.castShadow = options.castShadow ?? true;
  mesh_chain_left_0_14.receiveShadow = options.receiveShadow ?? true;
  mesh_chain_left_0_14.userData.sculptComponent = {"id": "chain-left-0", "name": "chain-left-0", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [0.6235382907247958, -2.4543999999999997, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-left-0-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-0.9464617092752042, 1.43, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 3.8844, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-left-0", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_left_0_14.add(mesh_chain_left_0_14);
  meshes["chain-left-0"] = mesh_chain_left_0_14;
  colliders["chain-left-0"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["chain-left-0"] ??= [];
  destructionGroups["chain-left-0"].push(node_chain_left_0_14);

  const attachment_chain_left_1_15 = {"parentId": "root", "parentSocket": "chain-left-1-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-2.193538290724796, 1.43, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015};
  const endpoint_chain_left_1_15 = makeAttachmentEndpoint(attachment_chain_left_1_15);
  const node_chain_left_1_15 = new THREE.Group();
  node_chain_left_1_15.name = "chain-left-1__pivot";
  node_chain_left_1_15.scale.set(1, 1, 1);
  if (endpoint_chain_left_1_15) {
    node_chain_left_1_15.position.copy(endpoint_chain_left_1_15.start);
    node_chain_left_1_15.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_chain_left_1_15.position.set(-1.57, 3.8844, 0.0);
    node_chain_left_1_15.rotation.set(0.0, 0.0, 0.0);
  }
  node_chain_left_1_15.userData.sculptComponent = {"id": "chain-left-1", "name": "chain-left-1", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-0.6235382907247959, -2.4543999999999997, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-left-1-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-2.193538290724796, 1.43, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 3.8844, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-left-1", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_left_1_15.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_chain_left_1_15);
  nodes["chain-left-1"] = node_chain_left_1_15;
  const mesh_chain_left_1_15Geometry = endpoint_chain_left_1_15
    ? new THREE.CylinderGeometry(endpoint_chain_left_1_15.endRadius, endpoint_chain_left_1_15.baseRadius, endpoint_chain_left_1_15.length, 16, 6)
    : buildTubeGeometry({"points": [[0, 0, 0], [-0.6235382907247959, -2.4543999999999997, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6});
  if (!endpoint_chain_left_1_15) {
    mesh_chain_left_1_15Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_chain_left_1_15 = new THREE.Mesh(
    mesh_chain_left_1_15Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_chain_left_1_15.name = "chain-left-1";
  if (endpoint_chain_left_1_15) {
    mesh_chain_left_1_15.position.copy(endpoint_chain_left_1_15.midpoint);
    mesh_chain_left_1_15.quaternion.copy(endpoint_chain_left_1_15.quaternion);
  }
  mesh_chain_left_1_15.castShadow = options.castShadow ?? true;
  mesh_chain_left_1_15.receiveShadow = options.receiveShadow ?? true;
  mesh_chain_left_1_15.userData.sculptComponent = {"id": "chain-left-1", "name": "chain-left-1", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-0.6235382907247959, -2.4543999999999997, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-left-1-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-2.193538290724796, 1.43, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 3.8844, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-left-1", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_left_1_15.add(mesh_chain_left_1_15);
  meshes["chain-left-1"] = mesh_chain_left_1_15;
  colliders["chain-left-1"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["chain-left-1"] ??= [];
  destructionGroups["chain-left-1"].push(node_chain_left_1_15);

  const attachment_chain_left_2_16 = {"parentId": "root", "parentSocket": "chain-left-2-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-1.5700000000000003, 1.43, -0.72], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015};
  const endpoint_chain_left_2_16 = makeAttachmentEndpoint(attachment_chain_left_2_16);
  const node_chain_left_2_16 = new THREE.Group();
  node_chain_left_2_16.name = "chain-left-2__pivot";
  node_chain_left_2_16.scale.set(1, 1, 1);
  if (endpoint_chain_left_2_16) {
    node_chain_left_2_16.position.copy(endpoint_chain_left_2_16.start);
    node_chain_left_2_16.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_chain_left_2_16.position.set(-1.57, 3.8844, 0.0);
    node_chain_left_2_16.rotation.set(0.0, 0.0, 0.0);
  }
  node_chain_left_2_16.userData.sculptComponent = {"id": "chain-left-2", "name": "chain-left-2", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-2.220446049250313e-16, -2.4543999999999997, -0.72]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-left-2-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-1.5700000000000003, 1.43, -0.72], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 3.8844, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-left-2", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_left_2_16.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_chain_left_2_16);
  nodes["chain-left-2"] = node_chain_left_2_16;
  const mesh_chain_left_2_16Geometry = endpoint_chain_left_2_16
    ? new THREE.CylinderGeometry(endpoint_chain_left_2_16.endRadius, endpoint_chain_left_2_16.baseRadius, endpoint_chain_left_2_16.length, 16, 6)
    : buildTubeGeometry({"points": [[0, 0, 0], [-2.220446049250313e-16, -2.4543999999999997, -0.72]], "radius": 0.013, "radialSegments": 6});
  if (!endpoint_chain_left_2_16) {
    mesh_chain_left_2_16Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_chain_left_2_16 = new THREE.Mesh(
    mesh_chain_left_2_16Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_chain_left_2_16.name = "chain-left-2";
  if (endpoint_chain_left_2_16) {
    mesh_chain_left_2_16.position.copy(endpoint_chain_left_2_16.midpoint);
    mesh_chain_left_2_16.quaternion.copy(endpoint_chain_left_2_16.quaternion);
  }
  mesh_chain_left_2_16.castShadow = options.castShadow ?? true;
  mesh_chain_left_2_16.receiveShadow = options.receiveShadow ?? true;
  mesh_chain_left_2_16.userData.sculptComponent = {"id": "chain-left-2", "name": "chain-left-2", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-2.220446049250313e-16, -2.4543999999999997, -0.72]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-left-2-seat", "localStart": [-1.57, 3.8844, 0], "localEnd": [-1.5700000000000003, 1.43, -0.72], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 3.8844, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-left-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-left-2", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_left_2_16.add(mesh_chain_left_2_16);
  meshes["chain-left-2"] = mesh_chain_left_2_16;
  colliders["chain-left-2"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["chain-left-2"] ??= [];
  destructionGroups["chain-left-2"].push(node_chain_left_2_16);

  const endpoint_bar_left_17 = makeAttachmentEndpoint(null);
  const node_bar_left_17 = new THREE.Group();
  node_bar_left_17.name = "bar-left__pivot";
  node_bar_left_17.scale.set(1, 1, 1);
  if (endpoint_bar_left_17) {
    node_bar_left_17.position.copy(endpoint_bar_left_17.start);
    node_bar_left_17.rotation.set(0.0, 0.3, 0.05);
  } else {
    node_bar_left_17.position.set(-1.57, 1.5, 0.0);
    node_bar_left_17.rotation.set(0.0, 0.3, 0.05);
  }
  node_bar_left_17.userData.sculptComponent = {"id": "bar-left", "name": "bar-left", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "bar-left-seat", "localStart": [-1.57, 1.5, 0], "localEnd": [-1.57, 1.5, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.82, "height": 0.28, "depth": 0.44, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 1.5, 0], "rotation": [0, 0.3, 0.05]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "bullion", "materialLayers": ["bullion"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bullion-bevel-left", "kind": "bevel", "geometryEffect": "beveled trapezoid bullion block", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_bar_left_17.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_bar_left_17);
  nodes["bar-left"] = node_bar_left_17;
  const mesh_bar_left_17Geometry = endpoint_bar_left_17
    ? new THREE.CylinderGeometry(endpoint_bar_left_17.endRadius, endpoint_bar_left_17.baseRadius, endpoint_bar_left_17.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_bar_left_17) {
    mesh_bar_left_17Geometry.scale(0.82, 0.28, 0.44);
  }
  const mesh_bar_left_17 = new THREE.Mesh(
    mesh_bar_left_17Geometry,
    materialMap["bullion"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_bar_left_17.name = "bar-left";
  if (endpoint_bar_left_17) {
    mesh_bar_left_17.position.copy(endpoint_bar_left_17.midpoint);
    mesh_bar_left_17.quaternion.copy(endpoint_bar_left_17.quaternion);
  }
  mesh_bar_left_17.castShadow = options.castShadow ?? true;
  mesh_bar_left_17.receiveShadow = options.receiveShadow ?? true;
  mesh_bar_left_17.userData.sculptComponent = {"id": "bar-left", "name": "bar-left", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "bar-left-seat", "localStart": [-1.57, 1.5, 0], "localEnd": [-1.57, 1.5, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.82, "height": 0.28, "depth": 0.44, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.57, 1.5, 0], "rotation": [0, 0.3, 0.05]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-left", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "bullion", "materialLayers": ["bullion"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bullion-bevel-left", "kind": "bevel", "geometryEffect": "beveled trapezoid bullion block", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_bar_left_17.add(mesh_bar_left_17);
  meshes["bar-left"] = mesh_bar_left_17;
  colliders["bar-left"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["bar-left"] ??= [];
  destructionGroups["bar-left"].push(node_bar_left_17);

  const endpoint_bar_left_second_18 = makeAttachmentEndpoint(null);
  const node_bar_left_second_18 = new THREE.Group();
  node_bar_left_second_18.name = "bar-left-second__pivot";
  node_bar_left_second_18.scale.set(1, 1, 1);
  if (endpoint_bar_left_second_18) {
    node_bar_left_second_18.position.copy(endpoint_bar_left_second_18.start);
    node_bar_left_second_18.rotation.set(0.0, -0.22, -0.06);
  } else {
    node_bar_left_second_18.position.set(-1.44, 1.76, 0.015);
    node_bar_left_second_18.rotation.set(0.0, -0.22, -0.06);
  }
  node_bar_left_second_18.userData.sculptComponent = {"id": "bar-left-second", "name": "bar-left-second", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "bar-left-second-seat", "localStart": [-1.44, 1.76, 0.015], "localEnd": [-1.44, 1.76, 0.015], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.82, "height": 0.28, "depth": 0.44, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.44, 1.76, 0.015], "rotation": [0, -0.22, -0.06]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-left-second", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "bullion", "materialLayers": ["bullion"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "second-bullion", "kind": "bevel", "geometryEffect": "second stacked bar with bevel edge", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_bar_left_second_18.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-left-second", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_bar_left_second_18);
  nodes["bar-left-second"] = node_bar_left_second_18;
  const mesh_bar_left_second_18Geometry = endpoint_bar_left_second_18
    ? new THREE.CylinderGeometry(endpoint_bar_left_second_18.endRadius, endpoint_bar_left_second_18.baseRadius, endpoint_bar_left_second_18.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_bar_left_second_18) {
    mesh_bar_left_second_18Geometry.scale(0.82, 0.28, 0.44);
  }
  const mesh_bar_left_second_18 = new THREE.Mesh(
    mesh_bar_left_second_18Geometry,
    materialMap["bullion"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_bar_left_second_18.name = "bar-left-second";
  if (endpoint_bar_left_second_18) {
    mesh_bar_left_second_18.position.copy(endpoint_bar_left_second_18.midpoint);
    mesh_bar_left_second_18.quaternion.copy(endpoint_bar_left_second_18.quaternion);
  }
  mesh_bar_left_second_18.castShadow = options.castShadow ?? true;
  mesh_bar_left_second_18.receiveShadow = options.receiveShadow ?? true;
  mesh_bar_left_second_18.userData.sculptComponent = {"id": "bar-left-second", "name": "bar-left-second", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "bar-left-second-seat", "localStart": [-1.44, 1.76, 0.015], "localEnd": [-1.44, 1.76, 0.015], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.82, "height": 0.28, "depth": 0.44, "units": "world", "confidence": 0.85}, "transform": {"position": [-1.44, 1.76, 0.015], "rotation": [0, -0.22, -0.06]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-left-second", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "bullion", "materialLayers": ["bullion"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "second-bullion", "kind": "bevel", "geometryEffect": "second stacked bar with bevel edge", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_bar_left_second_18.add(mesh_bar_left_second_18);
  meshes["bar-left-second"] = mesh_bar_left_second_18;
  colliders["bar-left-second"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["bar-left-second"] ??= [];
  destructionGroups["bar-left-second"].push(node_bar_left_second_18);

  const endpoint_pan_right_19 = makeAttachmentEndpoint(null);
  const node_pan_right_19 = new THREE.Group();
  node_pan_right_19.name = "pan-right__pivot";
  node_pan_right_19.scale.set(1, 1, 1);
  if (endpoint_pan_right_19) {
    node_pan_right_19.position.copy(endpoint_pan_right_19.start);
    node_pan_right_19.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_pan_right_19.position.set(1.57, 1.5999999999999999, 0.0);
    node_pan_right_19.rotation.set(0.0, 0.0, 0.0);
  }
  node_pan_right_19.userData.sculptComponent = {"id": "pan-right", "name": "pan-right", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0, -0.11], [0.45, -0.105], [0.66, -0.05], [0.75, 0.06], [0.77, 0.09], [0.75, 0.105], [0.7, 0.085], [0.59, -0.025], [0.43, -0.058], [0, -0.06]], "segments": 48}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "pan-right-seat", "localStart": [1.57, 1.5999999999999999, 0], "localEnd": [1.57, 1.5999999999999999, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 1.5999999999999999, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "pan-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bowl-right", "kind": "hole", "geometryEffect": "open shallow bowl with returned wall thickness", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_pan_right_19.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "pan-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_pan_right_19);
  nodes["pan-right"] = node_pan_right_19;
  const mesh_pan_right_19Geometry = endpoint_pan_right_19
    ? new THREE.CylinderGeometry(endpoint_pan_right_19.endRadius, endpoint_pan_right_19.baseRadius, endpoint_pan_right_19.length, 16, 6)
    : buildLatheGeometry({"points": [[0, -0.11], [0.45, -0.105], [0.66, -0.05], [0.75, 0.06], [0.77, 0.09], [0.75, 0.105], [0.7, 0.085], [0.59, -0.025], [0.43, -0.058], [0, -0.06]], "segments": 48});
  if (!endpoint_pan_right_19) {
    mesh_pan_right_19Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_pan_right_19 = new THREE.Mesh(
    mesh_pan_right_19Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_pan_right_19.name = "pan-right";
  if (endpoint_pan_right_19) {
    mesh_pan_right_19.position.copy(endpoint_pan_right_19.midpoint);
    mesh_pan_right_19.quaternion.copy(endpoint_pan_right_19.quaternion);
  }
  mesh_pan_right_19.castShadow = options.castShadow ?? true;
  mesh_pan_right_19.receiveShadow = options.receiveShadow ?? true;
  mesh_pan_right_19.userData.sculptComponent = {"id": "pan-right", "name": "pan-right", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "Observed turned radial profile with varying radius", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0, -0.11], [0.45, -0.105], [0.66, -0.05], [0.75, 0.06], [0.77, 0.09], [0.75, 0.105], [0.7, 0.085], [0.59, -0.025], [0.43, -0.058], [0, -0.06]], "segments": 48}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "pan-right-seat", "localStart": [1.57, 1.5999999999999999, 0], "localEnd": [1.57, 1.5999999999999999, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 1.5999999999999999, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "pan-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bowl-right", "kind": "hole", "geometryEffect": "open shallow bowl with returned wall thickness", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_pan_right_19.add(mesh_pan_right_19);
  meshes["pan-right"] = mesh_pan_right_19;
  colliders["pan-right"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["pan-right"] ??= [];
  destructionGroups["pan-right"].push(node_pan_right_19);

  const endpoint_rim_right_20 = makeAttachmentEndpoint(null);
  const node_rim_right_20 = new THREE.Group();
  node_rim_right_20.name = "rim-right__pivot";
  node_rim_right_20.scale.set(1, 1, 1);
  if (endpoint_rim_right_20) {
    node_rim_right_20.position.copy(endpoint_rim_right_20.start);
    node_rim_right_20.rotation.set(1.5707963267948966, 0.0, 0.0);
  } else {
    node_rim_right_20.position.set(0.0, 0.097, 0.0);
    node_rim_right_20.rotation.set(1.5707963267948966, 0.0, 0.0);
  }
  node_rim_right_20.userData.sculptComponent = {"id": "rim-right", "name": "rim-right", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "torus", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "pan-right", "attachment": {"parentId": "pan-right", "parentSocket": "rim-right-seat", "localStart": [0, 0.097, 0], "localEnd": [0, 0.097, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1.55, "height": 1.55, "depth": 0.026, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.097, 0], "rotation": [1.5707963267948966, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "rim-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "edge-gold", "materialLayers": ["edge-gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rim-bead-right", "kind": "ridge", "geometryEffect": "thin circular rim accent", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_rim_right_20.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "rim-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["pan-right"] ?? root).add(node_rim_right_20);
  nodes["rim-right"] = node_rim_right_20;
  const mesh_rim_right_20Geometry = endpoint_rim_right_20
    ? new THREE.CylinderGeometry(endpoint_rim_right_20.endRadius, endpoint_rim_right_20.baseRadius, endpoint_rim_right_20.length, 16, 6)
    : new THREE.TorusGeometry(0.45, 0.08, 12, 48);
  if (!endpoint_rim_right_20) {
    mesh_rim_right_20Geometry.scale(1.55, 1.55, 0.026);
  }
  const mesh_rim_right_20 = new THREE.Mesh(
    mesh_rim_right_20Geometry,
    materialMap["edge-gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_rim_right_20.name = "rim-right";
  if (endpoint_rim_right_20) {
    mesh_rim_right_20.position.copy(endpoint_rim_right_20.midpoint);
    mesh_rim_right_20.quaternion.copy(endpoint_rim_right_20.quaternion);
  }
  mesh_rim_right_20.castShadow = options.castShadow ?? true;
  mesh_rim_right_20.receiveShadow = options.receiveShadow ?? true;
  mesh_rim_right_20.userData.sculptComponent = {"id": "rim-right", "name": "rim-right", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "torus", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "pan-right", "attachment": {"parentId": "pan-right", "parentSocket": "rim-right-seat", "localStart": [0, 0.097, 0], "localEnd": [0, 0.097, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 1.55, "height": 1.55, "depth": 0.026, "units": "world", "confidence": 0.85}, "transform": {"position": [0, 0.097, 0], "rotation": [1.5707963267948966, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "rim-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "edge-gold", "materialLayers": ["edge-gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rim-bead-right", "kind": "ridge", "geometryEffect": "thin circular rim accent", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_rim_right_20.add(mesh_rim_right_20);
  meshes["rim-right"] = mesh_rim_right_20;
  colliders["rim-right"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["rim-right"] ??= [];
  destructionGroups["rim-right"].push(node_rim_right_20);

  const attachment_chain_right_0_21 = {"parentId": "root", "parentSocket": "chain-right-0-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [2.193538290724796, 1.68, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015};
  const endpoint_chain_right_0_21 = makeAttachmentEndpoint(attachment_chain_right_0_21);
  const node_chain_right_0_21 = new THREE.Group();
  node_chain_right_0_21.name = "chain-right-0__pivot";
  node_chain_right_0_21.scale.set(1, 1, 1);
  if (endpoint_chain_right_0_21) {
    node_chain_right_0_21.position.copy(endpoint_chain_right_0_21.start);
    node_chain_right_0_21.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_chain_right_0_21.position.set(1.57, 4.1356, 0.0);
    node_chain_right_0_21.rotation.set(0.0, 0.0, 0.0);
  }
  node_chain_right_0_21.userData.sculptComponent = {"id": "chain-right-0", "name": "chain-right-0", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [0.6235382907247959, -2.4556000000000004, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-right-0-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [2.193538290724796, 1.68, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 4.1356, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-right-0", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_right_0_21.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_chain_right_0_21);
  nodes["chain-right-0"] = node_chain_right_0_21;
  const mesh_chain_right_0_21Geometry = endpoint_chain_right_0_21
    ? new THREE.CylinderGeometry(endpoint_chain_right_0_21.endRadius, endpoint_chain_right_0_21.baseRadius, endpoint_chain_right_0_21.length, 16, 6)
    : buildTubeGeometry({"points": [[0, 0, 0], [0.6235382907247959, -2.4556000000000004, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6});
  if (!endpoint_chain_right_0_21) {
    mesh_chain_right_0_21Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_chain_right_0_21 = new THREE.Mesh(
    mesh_chain_right_0_21Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_chain_right_0_21.name = "chain-right-0";
  if (endpoint_chain_right_0_21) {
    mesh_chain_right_0_21.position.copy(endpoint_chain_right_0_21.midpoint);
    mesh_chain_right_0_21.quaternion.copy(endpoint_chain_right_0_21.quaternion);
  }
  mesh_chain_right_0_21.castShadow = options.castShadow ?? true;
  mesh_chain_right_0_21.receiveShadow = options.receiveShadow ?? true;
  mesh_chain_right_0_21.userData.sculptComponent = {"id": "chain-right-0", "name": "chain-right-0", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [0.6235382907247959, -2.4556000000000004, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-right-0-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [2.193538290724796, 1.68, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 4.1356, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-0", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-right-0", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_right_0_21.add(mesh_chain_right_0_21);
  meshes["chain-right-0"] = mesh_chain_right_0_21;
  colliders["chain-right-0"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["chain-right-0"] ??= [];
  destructionGroups["chain-right-0"].push(node_chain_right_0_21);

  const attachment_chain_right_1_22 = {"parentId": "root", "parentSocket": "chain-right-1-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [0.9464617092752042, 1.68, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015};
  const endpoint_chain_right_1_22 = makeAttachmentEndpoint(attachment_chain_right_1_22);
  const node_chain_right_1_22 = new THREE.Group();
  node_chain_right_1_22.name = "chain-right-1__pivot";
  node_chain_right_1_22.scale.set(1, 1, 1);
  if (endpoint_chain_right_1_22) {
    node_chain_right_1_22.position.copy(endpoint_chain_right_1_22.start);
    node_chain_right_1_22.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_chain_right_1_22.position.set(1.57, 4.1356, 0.0);
    node_chain_right_1_22.rotation.set(0.0, 0.0, 0.0);
  }
  node_chain_right_1_22.userData.sculptComponent = {"id": "chain-right-1", "name": "chain-right-1", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-0.6235382907247958, -2.4556000000000004, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-right-1-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [0.9464617092752042, 1.68, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 4.1356, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-right-1", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_right_1_22.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_chain_right_1_22);
  nodes["chain-right-1"] = node_chain_right_1_22;
  const mesh_chain_right_1_22Geometry = endpoint_chain_right_1_22
    ? new THREE.CylinderGeometry(endpoint_chain_right_1_22.endRadius, endpoint_chain_right_1_22.baseRadius, endpoint_chain_right_1_22.length, 16, 6)
    : buildTubeGeometry({"points": [[0, 0, 0], [-0.6235382907247958, -2.4556000000000004, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6});
  if (!endpoint_chain_right_1_22) {
    mesh_chain_right_1_22Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_chain_right_1_22 = new THREE.Mesh(
    mesh_chain_right_1_22Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_chain_right_1_22.name = "chain-right-1";
  if (endpoint_chain_right_1_22) {
    mesh_chain_right_1_22.position.copy(endpoint_chain_right_1_22.midpoint);
    mesh_chain_right_1_22.quaternion.copy(endpoint_chain_right_1_22.quaternion);
  }
  mesh_chain_right_1_22.castShadow = options.castShadow ?? true;
  mesh_chain_right_1_22.receiveShadow = options.receiveShadow ?? true;
  mesh_chain_right_1_22.userData.sculptComponent = {"id": "chain-right-1", "name": "chain-right-1", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-0.6235382907247958, -2.4556000000000004, 0.35999999999999993]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-right-1-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [0.9464617092752042, 1.68, 0.35999999999999993], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 4.1356, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-1", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-right-1", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_right_1_22.add(mesh_chain_right_1_22);
  meshes["chain-right-1"] = mesh_chain_right_1_22;
  colliders["chain-right-1"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["chain-right-1"] ??= [];
  destructionGroups["chain-right-1"].push(node_chain_right_1_22);

  const attachment_chain_right_2_23 = {"parentId": "root", "parentSocket": "chain-right-2-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [1.5699999999999998, 1.68, -0.72], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015};
  const endpoint_chain_right_2_23 = makeAttachmentEndpoint(attachment_chain_right_2_23);
  const node_chain_right_2_23 = new THREE.Group();
  node_chain_right_2_23.name = "chain-right-2__pivot";
  node_chain_right_2_23.scale.set(1, 1, 1);
  if (endpoint_chain_right_2_23) {
    node_chain_right_2_23.position.copy(endpoint_chain_right_2_23.start);
    node_chain_right_2_23.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_chain_right_2_23.position.set(1.57, 4.1356, 0.0);
    node_chain_right_2_23.rotation.set(0.0, 0.0, 0.0);
  }
  node_chain_right_2_23.userData.sculptComponent = {"id": "chain-right-2", "name": "chain-right-2", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-2.220446049250313e-16, -2.4556000000000004, -0.72]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-right-2-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [1.5699999999999998, 1.68, -0.72], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 4.1356, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-right-2", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_right_2_23.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_chain_right_2_23);
  nodes["chain-right-2"] = node_chain_right_2_23;
  const mesh_chain_right_2_23Geometry = endpoint_chain_right_2_23
    ? new THREE.CylinderGeometry(endpoint_chain_right_2_23.endRadius, endpoint_chain_right_2_23.baseRadius, endpoint_chain_right_2_23.length, 16, 6)
    : buildTubeGeometry({"points": [[0, 0, 0], [-2.220446049250313e-16, -2.4556000000000004, -0.72]], "radius": 0.013, "radialSegments": 6});
  if (!endpoint_chain_right_2_23) {
    mesh_chain_right_2_23Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_chain_right_2_23 = new THREE.Mesh(
    mesh_chain_right_2_23Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_chain_right_2_23.name = "chain-right-2";
  if (endpoint_chain_right_2_23) {
    mesh_chain_right_2_23.position.copy(endpoint_chain_right_2_23.midpoint);
    mesh_chain_right_2_23.quaternion.copy(endpoint_chain_right_2_23.quaternion);
  }
  mesh_chain_right_2_23.castShadow = options.castShadow ?? true;
  mesh_chain_right_2_23.receiveShadow = options.receiveShadow ?? true;
  mesh_chain_right_2_23.userData.sculptComponent = {"id": "chain-right-2", "name": "chain-right-2", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "tube", "topologyClass": "fiber-strand", "topologyRationale": "Observed thin member following a curved centerline", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "tubePath": {"points": [[0, 0, 0], [-2.220446049250313e-16, -2.4556000000000004, -0.72]], "radius": 0.013, "radialSegments": 6}, "worldSpaceDescriptor": true}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "chain-right-2-seat", "localStart": [1.57, 4.1356, 0], "localEnd": [1.5699999999999998, 1.68, -0.72], "contactType": "hinge", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"], "baseRadius": 0.015, "endRadius": 0.015}, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 4.1356, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "chain-right-2", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "links-right-2", "kind": "ridge", "geometryEffect": "repeated alternating oval chain links along endpoints", "confidence": 0.83}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_chain_right_2_23.add(mesh_chain_right_2_23);
  meshes["chain-right-2"] = mesh_chain_right_2_23;
  colliders["chain-right-2"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["chain-right-2"] ??= [];
  destructionGroups["chain-right-2"].push(node_chain_right_2_23);

  const endpoint_bar_right_24 = makeAttachmentEndpoint(null);
  const node_bar_right_24 = new THREE.Group();
  node_bar_right_24.name = "bar-right__pivot";
  node_bar_right_24.scale.set(1, 1, 1);
  if (endpoint_bar_right_24) {
    node_bar_right_24.position.copy(endpoint_bar_right_24.start);
    node_bar_right_24.rotation.set(0.0, -0.1, 0.05);
  } else {
    node_bar_right_24.position.set(1.57, 1.75, 0.0);
    node_bar_right_24.rotation.set(0.0, -0.1, 0.05);
  }
  node_bar_right_24.userData.sculptComponent = {"id": "bar-right", "name": "bar-right", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "bar-right-seat", "localStart": [1.57, 1.75, 0], "localEnd": [1.57, 1.75, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.82, "height": 0.28, "depth": 0.44, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 1.75, 0], "rotation": [0, -0.1, 0.05]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "bullion", "materialLayers": ["bullion"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bullion-bevel-right", "kind": "bevel", "geometryEffect": "beveled trapezoid bullion block", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_bar_right_24.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_bar_right_24);
  nodes["bar-right"] = node_bar_right_24;
  const mesh_bar_right_24Geometry = endpoint_bar_right_24
    ? new THREE.CylinderGeometry(endpoint_bar_right_24.endRadius, endpoint_bar_right_24.baseRadius, endpoint_bar_right_24.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_bar_right_24) {
    mesh_bar_right_24Geometry.scale(0.82, 0.28, 0.44);
  }
  const mesh_bar_right_24 = new THREE.Mesh(
    mesh_bar_right_24Geometry,
    materialMap["bullion"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_bar_right_24.name = "bar-right";
  if (endpoint_bar_right_24) {
    mesh_bar_right_24.position.copy(endpoint_bar_right_24.midpoint);
    mesh_bar_right_24.quaternion.copy(endpoint_bar_right_24.quaternion);
  }
  mesh_bar_right_24.castShadow = options.castShadow ?? true;
  mesh_bar_right_24.receiveShadow = options.receiveShadow ?? true;
  mesh_bar_right_24.userData.sculptComponent = {"id": "bar-right", "name": "bar-right", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "bar-right-seat", "localStart": [1.57, 1.75, 0], "localEnd": [1.57, 1.75, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.82, "height": 0.28, "depth": 0.44, "units": "world", "confidence": 0.85}, "transform": {"position": [1.57, 1.75, 0], "rotation": [0, -0.1, 0.05]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "bar-right", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "bullion", "materialLayers": ["bullion"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "bullion-bevel-right", "kind": "bevel", "geometryEffect": "beveled trapezoid bullion block", "confidence": 0.9}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "structural-pass", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_bar_right_24.add(mesh_bar_right_24);
  meshes["bar-right"] = mesh_bar_right_24;
  colliders["bar-right"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["bar-right"] ??= [];
  destructionGroups["bar-right"].push(node_bar_right_24);

  const attachment_finial_neck_25 = {"parentId": "root", "parentSocket": "column-seat", "localStart": [0, 2.3, 0], "localEnd": [0, 2.3, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]};
  const endpoint_finial_neck_25 = makeAttachmentEndpoint(attachment_finial_neck_25);
  const node_finial_neck_25 = new THREE.Group();
  node_finial_neck_25.name = "finial-neck__pivot";
  node_finial_neck_25.scale.set(1, 1, 1);
  if (endpoint_finial_neck_25) {
    node_finial_neck_25.position.copy(endpoint_finial_neck_25.start);
    node_finial_neck_25.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_finial_neck_25.position.set(0.0, 4.77, 0.0);
    node_finial_neck_25.rotation.set(0.0, 0.0, 0.0);
  }
  node_finial_neck_25.userData.sculptComponent = {"id": "finial-neck", "name": "finial-neck", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "column-seat", "localStart": [0, 2.3, 0], "localEnd": [0, 2.3, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.2, "height": 0.65, "depth": 0.2, "units": "world", "confidence": 0.7}, "transform": {"position": [0, 4.77, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "column", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "upper-neck", "kind": "contour", "geometryEffect": "solid connection from spindle to finial", "confidence": 0.8}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_finial_neck_25.userData.actionProfile = {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "column", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_finial_neck_25);
  nodes["finial-neck"] = node_finial_neck_25;
  const mesh_finial_neck_25Geometry = endpoint_finial_neck_25
    ? new THREE.CylinderGeometry(endpoint_finial_neck_25.endRadius, endpoint_finial_neck_25.baseRadius, endpoint_finial_neck_25.length, 16, 6)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 24, 8);
  if (!endpoint_finial_neck_25) {
    mesh_finial_neck_25Geometry.scale(0.2, 0.65, 0.2);
  }
  const mesh_finial_neck_25 = new THREE.Mesh(
    mesh_finial_neck_25Geometry,
    materialMap["gold"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_finial_neck_25.name = "finial-neck";
  if (endpoint_finial_neck_25) {
    mesh_finial_neck_25.position.copy(endpoint_finial_neck_25.midpoint);
    mesh_finial_neck_25.quaternion.copy(endpoint_finial_neck_25.quaternion);
  }
  mesh_finial_neck_25.castShadow = options.castShadow ?? true;
  mesh_finial_neck_25.receiveShadow = options.receiveShadow ?? true;
  mesh_finial_neck_25.userData.sculptComponent = {"id": "finial-neck", "name": "finial-neck", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.88, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Observed rigid discrete component with circular or planar faces", "geometryDescriptor": {"topologyIntent": "subject-specific procedural form", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.02, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": "root", "attachment": {"parentId": "root", "parentSocket": "column-seat", "localStart": [0, 2.3, 0], "localEnd": [0, 2.3, 0], "contactType": "surface-contact", "overlap": 0.025, "embedDepth": 0.025, "gapTolerance": 0.035, "evidenceRefs": ["full-object"]}, "dimensions": {"width": 0.2, "height": 0.65, "depth": 0.2, "units": "world", "confidence": 0.7}, "transform": {"position": [0, 4.77, 0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "rigid-part", "pivot": {"mode": "center", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "column", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "gold", "materialLayers": ["gold"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "upper-neck", "kind": "contour", "geometryEffect": "solid connection from spindle to finial", "confidence": 0.8}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(214, 166, 76, 1)", "secondaryAlbedo": "rgba(242, 206, 134, 1)", "materialClass": "metal", "materialClassConfidence": 0.9}};
  node_finial_neck_25.add(mesh_finial_neck_25);
  meshes["finial-neck"] = mesh_finial_neck_25;
  colliders["finial-neck"] = {"type": "box", "offset": [0, 0, 0], "scale": [1, 1, 1], "isTrigger": false, "notes": "Replace with sphere/capsule/compound proxy when the object shape demands it."};
  destructionGroups["column"] ??= [];
  destructionGroups["column"].push(node_finial_neck_25);

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "Illustration of highly reflective homogeneous gold: exact maps cannot be recovered. Representative independent PBR channels and measured visual render review are used; no exact material recovery claim."}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createGoldBalanceWithCurvedBeamChainsAndBullionLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Gold balance with curved beam chains and bullion look-dev lights";
  const hemi = new THREE.HemisphereLight(
    mode === 'reference' ? 0xfff0d6 : 0xf2f4ff,
    0x363b42,
    mode === 'grazing' ? 0.28 : mode === 'reference' ? 0.72 : 0.85,
  );
  lights.add(hemi);
  const key = new THREE.DirectionalLight(
    mode === 'reference' ? 0xffcf8a : 0xfff4e8,
    mode === 'grazing' ? 4.2 : mode === 'reference' ? 2.6 : 2.15,
  );
  if (mode === 'grazing') key.position.set(7.5, 1.1, 4.0);
  else if (mode === 'reference') key.position.set(-4.5, 7.5, 5.0);
  else key.position.set(-4.0, 6.0, 5.5);
  key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096);
  key.shadow.bias = -0.00025;
  key.shadow.normalBias = 0.018;
  key.shadow.radius = 7;
  key.shadow.blurSamples = 24;
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 30;
  key.shadow.camera.left = -2.6;
  key.shadow.camera.right = 2.6;
  key.shadow.camera.top = 2.6;
  key.shadow.camera.bottom = -2.6;
  key.shadow.camera.updateProjectionMatrix();
  lights.add(key);
  const fill = new THREE.DirectionalLight(0xa8c4ff, mode === 'grazing' ? 0.12 : 0.42);
  fill.position.set(4.0, 3.0, 3.5);
  lights.add(fill);
  const rim = new THREE.DirectionalLight(0xfff1c4, mode === 'grazing' ? 0.28 : 0.85);
  rim.position.set(0.5, 4.5, -6.0);
  lights.add(rim);
  lights.userData.reviewMode = mode;
  lights.userData.lightingFromPhoto = [{"type": "key light", "direction": [-3, 6, 5], "color": "#fff0d0", "intensity": 3}, {"type": "fill light", "direction": [3, 3, 3], "color": "#fbfaf0", "intensity": 1}, {"type": "rim or environment light", "direction": [0, 4, -4], "color": "#c6a15b", "intensity": 2}, {"type": "exposure", "value": 1}, {"type": "tone mapping", "value": "ACESFilmic"}, {"type": "background", "value": "white for review; Azyra green for hero"}, {"type": "contact shadow", "value": "soft footprint beneath plinth"}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "Illustration of highly reflective homogeneous gold: exact maps cannot be recovered. Representative independent PBR channels and measured visual render review are used; no exact material recovery claim."}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}

// PBR materials (clearcoat/iridescence/transmission/anisotropy) need an environment
// map to visually behave as intended — call this once per renderer and assign the
// result to scene.environment before rendering. No external HDR asset required.
export function createGoldBalanceWithCurvedBeamChainsAndBullionEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const texture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  return texture;
}

// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameGoldBalanceWithCurvedBeamChainsAndBullionCamera(
  camera: THREE.PerspectiveCamera,
  object: THREE.Object3D,
  options: { margin?: number; azimuthDeg?: number; elevationDeg?: number } = {},
): void {
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return;
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const margin = options.margin ?? 1.15;
  const maxDim = Math.max(size.x, size.y, size.z) * margin;
  const fov = (camera.fov * Math.PI) / 180;
  // distance so the largest object dimension fits vertically in the frame
  const distance = (maxDim / 2) / Math.tan(fov / 2);
  const az = ((options.azimuthDeg ?? 0) * Math.PI) / 180;
  const el = ((options.elevationDeg ?? 0) * Math.PI) / 180;
  const dir = new THREE.Vector3(
    Math.sin(az) * Math.cos(el),
    Math.sin(el),
    Math.cos(az) * Math.cos(el),
  );
  camera.position.copy(center).addScaledVector(dir, distance);
  camera.near = Math.max(0.01, distance - maxDim);
  camera.far = distance + maxDim * 2;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}

// Plan 1.3 §3.2c — PRESENTATION composer (DOF + bloom). CRITICAL (R-POSTFX): this is
// for the showcase/hero render ONLY. The Divine Eye's EVALUATION render MUST use a
// plain renderer with NO composer — bloom blows highlights and DOF blurs edges, which
// would corrupt the deterministic IoU/DCD/edge/blowout signals. Enable dof/bloom ONLY
// when the reference photo actually exhibits them (detect_reference_effects.py authorizes).
export function createGoldBalanceWithCurvedBeamChainsAndBullionPresentationComposer(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  options: { dof?: boolean; bloom?: boolean; bloomStrength?: number; dofFocus?: number; dofAperture?: number } = {},
): EffectComposer {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  if (options.dof) {
    composer.addPass(new BokehPass(scene, camera, {
      focus: options.dofFocus ?? 10.0,
      aperture: options.dofAperture ?? 0.0002,
      maxblur: 0.01,
    }));
  }
  if (options.bloom) {
    const size = new THREE.Vector2();
    renderer.getSize(size);
    composer.addPass(new UnrealBloomPass(size, options.bloomStrength ?? 0.4, 0.4, 0.85));
  }
  return composer;
}

export function configureGoldBalanceWithCurvedBeamChainsAndBullionRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

export function createGoldBalanceWithCurvedBeamChainsAndBullionInspectControls(
  camera: THREE.Camera,
  domElement: HTMLElement,
): OrbitControls {
  // View-dependent finishes only read correctly once the user orbits — their color
  // comes from the environment reflection, not albedo, so free rotation matters here.
  const controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.minDistance = 1.0;
  controls.maxDistance = 8.0;
  controls.autoRotate = false;
  return controls;
}
