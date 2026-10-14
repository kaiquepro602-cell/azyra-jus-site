import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// Hand correction of the current, unapproved img2threejs blockout. This does
// not unlock later sculpt passes. Parameters and limitations are recorded in
// docs/object-sculpt-spec.json under websiteRefinement.
const lathe=(points,segments=72)=>new THREE.LatheGeometry(points.map(p=>new THREE.Vector2(...p)),segments);
const merge=parts=>{
 const inputs=parts.map(g=>g.index?g.toNonIndexed():g.clone());
 const result=mergeGeometries(inputs,false);
 inputs.forEach(g=>g.dispose());parts.forEach(g=>g.dispose());
 if(!result)throw new Error('Balance geometry attributes do not match');
 return result;
};

function octagonalFoot(width,height,depth){
 const shape=new THREE.Shape();
 for(let i=0;i<8;i++){
  const a=Math.PI/8+i*Math.PI/4,x=Math.cos(a)*width/2,y=Math.sin(a)*width/2;
  if(i===0)shape.moveTo(x,y);else shape.lineTo(x,y);
 }
 shape.closePath();
 const bevel=.012;
 const geometry=new THREE.ExtrudeGeometry(shape,{depth:height-2*bevel,steps:1,bevelEnabled:true,bevelSize:bevel,bevelThickness:bevel,bevelSegments:3,curveSegments:1});
 geometry.rotateX(-Math.PI/2);geometry.translate(0,-height/2+bevel,0);geometry.scale(1,1,depth/width);
 return geometry;
}

function linkedChain(length){
 const rx=.033,ry=.065,wire=.010;
 const points=Array.from({length:25},(_,i)=>{
  const a=i/24*Math.PI*2;return new THREE.Vector3(rx*Math.cos(a),ry*Math.sin(a),0);
 });
 const path=new THREE.CatmullRomCurve3(points.slice(0,-1),true,'centripetal');
 const template=new THREE.TubeGeometry(path,24,wire,6,true);
 const count=Math.max(2,Math.round((length-.15)/.098)+1),links=[];
 for(let i=0;i<count;i++){
  const g=template.clone();g.rotateY(i%2?Math.PI/2:0);
  g.translate(0,-length/2+.075+i*(length-.15)/(count-1),0);links.push(g);
 }
 template.dispose();return {geometry:merge(links),count};
}

// Small bullion hallmarks are actual relief, never a flat picture of the object.
// Letter strokes approximate the inscription; its typeface is not recoverable.
function bullionHallmarks(){
 const glyphs={
  G:[[[.85,.86],[.6,1],[.2,.95],[0,.7],[0,.25],[.2,0],[.7,0],[.9,.2],[.9,.45],[.55,.45]]],
  O:[[[.2,0],[0,.25],[0,.75],[.2,1],[.7,1],[.9,.75],[.9,.25],[.7,0],[.2,0]]],
  L:[[[0,1],[0,0],[.8,0]]],
  D:[[[0,0],[0,1],[.45,1],[.85,.75],[.85,.25],[.45,0],[0,0]]],
  '9':[[[.85,.5],[.2,.5],[0,.7],[0,.9],[.2,1],[.65,1],[.85,.8],[.85,.25],[.65,0],[.1,0]]],
  '.':[[[.35,0],[.36,.04]]]
 };
 const pieces=[];
 for(const [text,size,z] of [['GOLD',.058,-.035],['999.9',.034,.045]]){
  const step=size*1.24,width=(text.length-1)*step+size*.9;
  [...text].forEach((letter,index)=>glyphs[letter].forEach(stroke=>{
   const pts=stroke.map(([x,y])=>new THREE.Vector3(-width/2+index*step+x*size,.141,z-y*size));
   const curve=new THREE.CatmullRomCurve3(pts,false,'centripetal');
   pieces.push(new THREE.TubeGeometry(curve,Math.max(6,pts.length*3),.0021,4,false));
  }));
 }
 return merge(pieces);
}

export function refineBalanceModel(model){
 const materials={
  gold:new THREE.MeshPhysicalMaterial({color:0xe3b650,metalness:1,roughness:.23,envMapIntensity:1.15}),
  edge:new THREE.MeshPhysicalMaterial({color:0xedc768,metalness:1,roughness:.18,envMapIntensity:1.2}),
  bullion:new THREE.MeshPhysicalMaterial({color:0xf0c95c,metalness:1,roughness:.22,envMapIntensity:1.1}),
  stamp:new THREE.MeshPhysicalMaterial({color:0xa67d25,metalness:1,roughness:.32,envMapIntensity:.9})
 };
 const oldMaterials=new Set(),oldTextures=new Set();
 const stats={parts:0,links:0,triangles:0};
 model.traverse(mesh=>{
  if(!mesh.isMesh)return;
  const id=mesh.name,component=mesh.userData.sculptComponent;
  if(!component)return;
  const old=Array.isArray(mesh.material)?mesh.material:[mesh.material];
  old.forEach(mat=>{oldMaterials.add(mat);for(const value of Object.values(mat))if(value?.isTexture)oldTextures.add(value);});
  let geometry,material=materials.gold;
  if(id==='root'||id==='foot-step'){
   const d=component.dimensions;geometry=octagonalFoot(d.width,d.height,d.depth);material=materials.edge;
  }else if(id==='column'){
   // Continuous spindle: broad turned lower/upper knots with a long slim shaft.
   const profile=[[.13,.22],[.16,.27],[.19,.32],[.23,.4],[.265,.51],[.28,.61],[.265,.69],[.21,.77],[.155,.87],[.15,.94],[.15,1.48],[.155,1.6],[.2,1.67],[.23,1.75],[.24,1.82],[.225,1.91],[.175,2.02],[.155,2.07],[.15,2.14],[.15,3.52],[.155,3.61],[.2,3.68],[.24,3.76],[.25,3.83],[.23,3.93],[.17,4.02],[.15,4.11],[.15,4.59]];
   geometry=lathe(profile.map(([r,y])=>[r,y-2.3]),96);
  }else if(id.startsWith('collar-')){
   geometry=lathe([[.15,-.1],[.185,-.1],[.215,-.095],[.24,-.077],[.253,-.049],[.257,0],[.253,.049],[.24,.077],[.215,.095],[.185,.1],[.15,.1]],80);material=materials.edge;
  }else if(id==='finial-neck'){
   geometry=lathe([[.145,-.325],[.17,-.29],[.195,-.22],[.18,-.16],[.15,-.13],[.16,-.09],[.17,-.065],[.14,-.035],[.11,.035],[.095,.09],[.11,.14],[.14,.2],[.17,.26],[.18,.325]],80);
  }else if(id==='finial'){
   geometry=new THREE.SphereGeometry(.17,40,28);geometry.scale(1,1.12,1);material=materials.edge;
  }else if(id==='beam'){
   const points=component.geometryDescriptor.tubePath.points.map(p=>new THREE.Vector3(...p));
   const beam=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),96,.069,20,false);
   beam.scale(1,1,.8);
   const parts=[beam];
   for(const p of [points[0],points.at(-1)]){
    const cap=new THREE.SphereGeometry(.067,16,10);cap.scale(1,1,.8);cap.translate(p.x,p.y,p.z);parts.push(cap);
    const eye=new THREE.TorusGeometry(.06,.014,8,32);eye.rotateX(Math.PI/2);eye.scale(1.3,1,.8);eye.translate(p.x,p.y,p.z);parts.push(eye);
   }
   geometry=merge(parts);
  }else if(id==='beam-center'){
   geometry=lathe([[0,-.57],[.09,-.57],[.113,-.555],[.126,-.53],[.13,-.5],[.13,.5],[.126,.53],[.113,.555],[.09,.57],[0,.57]],80);material=materials.edge;
  }else if(id.startsWith('pan-')){
   geometry=lathe([[0,-.165],[.25,-.165],[.42,-.154],[.53,-.128],[.62,-.082],[.69,-.025],[.739,.039],[.765,.083],[.767,.095],[.757,.105],[.745,.1],[.721,.061],[.681,.002],[.615,-.057],[.53,-.101],[.42,-.124],[.25,-.13],[0,-.13]],96);
  }else if(id.startsWith('rim-')){
   geometry=new THREE.TorusGeometry(.756,.012,10,96);material=materials.edge;
  }else if(id.startsWith('chain-')){
   const a=component.attachment;
   const length=new THREE.Vector3(...a.localStart).distanceTo(new THREE.Vector3(...a.localEnd));
   const chain=linkedChain(length);geometry=chain.geometry;stats.links+=chain.count;mesh.userData.linkCount=chain.count;
   material=materials.edge;
  }else if(id.startsWith('bar-')){
   // Seat the bullion in the concave dish; the old preview left a visible gap.
   const seatY={'bar-left':1.38,'bar-left-second':1.643,'bar-right':1.63}[id];
   if(seatY!==undefined)mesh.parent.position.y=seatY;
   const d=component.dimensions;
   const body=new RoundedBoxGeometry(d.width,d.height,d.depth,3,.023);
   const positions=body.attributes.position;
   for(let i=0;i<positions.count;i++){
    const taper=1-.09*(positions.getY(i)/d.height+.5);
    positions.setX(i,positions.getX(i)*taper);positions.setZ(i,positions.getZ(i)*taper);
   }
   body.computeVertexNormals();
   const mark=bullionHallmarks();const inputs=[body,mark].map(g=>g.index?g.toNonIndexed():g.clone());
   geometry=mergeGeometries(inputs,true);inputs.forEach(g=>g.dispose());body.dispose();mark.dispose();
   material=[materials.bullion,materials.stamp];
  }
  if(geometry){mesh.geometry.dispose();mesh.geometry=geometry;}
  mesh.material=material;mesh.castShadow=false;mesh.receiveShadow=false;
  mesh.userData.websiteRefinement={pass:'blockout',approved:false,source:'single-image, procedural geometry'};
  stats.parts++;stats.triangles+=mesh.geometry.index?mesh.geometry.index.count/3:mesh.geometry.attributes.position.count/3;
 });
 oldTextures.forEach(t=>t.dispose());oldMaterials.forEach(m=>m.dispose());
 model.userData.websiteRefinement={...stats,approved:false,notes:'Hidden views and hallmark letterforms are inferred. Browser review pending; no subsequent sculpt pass unlocked.'};
 return model;
}
