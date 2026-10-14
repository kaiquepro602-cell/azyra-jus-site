import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createGoldBalanceWithCurvedBeamChainsAndBullionModel as createBalance} from './createBalanceModel.ts';
import {refineBalanceModel} from './refineBalanceModel.js';

// Interactive preview of the preserved img2threejs blockout. No deeper sculpt pass
// has been marked approved; reference and browser review are documented in LEIA-ME.
function startScene(){
 const host=document.querySelector('#balance-viewport');
 if(!host)return;
 const fallback=document.querySelector('#balance-fallback');
 const status=document.querySelector('#scene-status');
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const desktopPreference=matchMedia('(hover: hover) and (pointer: fine)');
 let renderer,environment,controls,resizeObserver,visibilityObserver;
 const disposables=[];
 let frame=0,visible=true,dragging=false,hovered=false,focused=false,userPaused=false,reduced=window.AzyraMotion?.reduced??preference.matches,disposed=false,time=0,lastTime=0;
 let desktop=desktopPreference.matches,spin=0,spinSpeed=0,lastInteraction=-Infinity;
 let rotationTarget=null,turning=false;
 const announce=text=>{status.textContent=text};
 try{
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.setClearColor(0,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=.95;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFShadowMap;
  const canvas=renderer.domElement;
  canvas.id='balance-canvas';canvas.tabIndex=0;
  canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Balança dourada interativa em 3D. Arraste para explorar. Setas giram a vista, Home restaura e Espaço pausa ou retoma.');
  canvas.setAttribute('aria-describedby','scene-help');canvas.style.touchAction='pan-y';
  canvas.setAttribute('aria-keyshortcuts','ArrowLeft ArrowRight Home Space');
  host.append(canvas);
  const scene=new THREE.Scene();
  const pmrem=new THREE.PMREMGenerator(renderer);
  const room=new RoomEnvironment();
  // Broad studio reflection cards give polished metal light/dark boundaries.
  const cards=[];
  for(const [position,size,intensity] of [[[-4,2,4],[2,7,.1],3],[[4,1,-2],[1,6,.1],2],[[0,6,1],[5,.1,3],2.5]]){
   const card=new THREE.Mesh(new THREE.BoxGeometry(...size),new THREE.MeshBasicMaterial({color:new THREE.Color(0xfff4df).multiplyScalar(intensity)}));
   card.position.set(...position);card.lookAt(0,1,0);room.add(card);cards.push(card);
  }
  environment=pmrem.fromScene(room,.015);scene.environment=environment.texture;
  cards.forEach(card=>{room.remove(card);card.geometry.dispose();card.material.dispose();});
  room.dispose();pmrem.dispose();
  const camera=new THREE.PerspectiveCamera(34,1,.1,100);
  camera.position.set(6,3.5,12);
  const hemisphere=new THREE.HemisphereLight(0xfff1dc,0x063c2e,.65);scene.add(hemisphere);
  const key=new THREE.DirectionalLight(0xfff2dc,2.6);key.position.set(-4,6,6);scene.add(key);
  key.castShadow=true;key.shadow.mapSize.set(desktop?1024:512,desktop?1024:512);
  Object.assign(key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:24});
  key.shadow.camera.updateProjectionMatrix();
  key.shadow.normalBias=.008;key.shadow.bias=-.0002;key.shadow.radius=2;
  const rim=new THREE.DirectionalLight(0xffdb91,1.8);rim.position.set(5,2,-4);scene.add(rim);
  const root=new THREE.Group();scene.add(root);
  const model=refineBalanceModel(createBalance({castShadow:true,receiveShadow:true,textureSize:32}));
  model.position.y=-2.68;root.add(model);
  model.traverse(mesh=>{if(mesh.isMesh){mesh.castShadow=true;mesh.receiveShadow=true;}});
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(5,4),new THREE.ShadowMaterial({opacity:.24}));
  floor.rotation.x=-Math.PI/2;floor.position.y=-2.735;floor.receiveShadow=true;scene.add(floor);
  disposables.push(()=>{floor.geometry.dispose();floor.material.dispose();});
  controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.075;
  controls.enablePan=false;controls.enableZoom=false;controls.minPolarAngle=.32;controls.maxPolarAngle=Math.PI-.32;
  controls.rotateSpeed=.65;controls.target.set(0,0,0);controls.update();
  controls.addEventListener('start',()=>{dragging=true;spinSpeed=0;rotationTarget=null;turning=false;requestFrame();});
  controls.addEventListener('end',()=>{dragging=false;lastInteraction=performance.now();requestFrame();});
  controls.addEventListener('change',requestFrame);
  const on=(target,event,fn)=>{target.addEventListener(event,fn);disposables.push(()=>target.removeEventListener(event,fn));};
  on(canvas,'pointerenter',()=>{hovered=true;spinSpeed=0;requestFrame();});
  on(canvas,'pointerleave',()=>{hovered=false;lastInteraction=performance.now();requestFrame();});
  on(canvas,'focus',()=>{focused=true;spinSpeed=0;requestFrame();});
  on(canvas,'blur',()=>{focused=false;lastInteraction=performance.now();requestFrame();});
  const desktopChange=()=>{desktop=desktopPreference.matches;spinSpeed=0;requestFrame();};
  desktopPreference.addEventListener('change',desktopChange);disposables.push(()=>desktopPreference.removeEventListener('change',desktopChange));
  function fit(){
   if(disposed)return;
   const width=Math.max(1,host.clientWidth),height=Math.max(1,host.clientHeight);
   camera.aspect=width/height;camera.updateProjectionMatrix();renderer.setSize(width,height,false);
   const distance=(Math.max(5.7,4.9/camera.aspect)/2)/Math.tan(THREE.MathUtils.degToRad(17))*1.12;
   camera.position.normalize().multiplyScalar(distance);controls.update();requestFrame();
  }
  const resize=()=>fit();
  if('ResizeObserver'in window){resizeObserver=new ResizeObserver(resize);resizeObserver.observe(host);}else{window.addEventListener('resize',resize);disposables.push(()=>window.removeEventListener('resize',resize));}
  if('IntersectionObserver'in window){visibilityObserver=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)requestFrame();else{cancelAnimationFrame(frame);frame=0;lastTime=0;}},{threshold:.03});visibilityObserver.observe(host);}
  function renderLoop(stamp){
   frame=0;if(disposed||!visible||document.hidden)return;
   const dt=lastTime?Math.min(.05,(stamp-lastTime)/1000):0;lastTime=stamp;
   const moving=!reduced&&!userPaused&&!dragging&&!hovered&&!focused;
   if(moving){
    time+=dt;
    const targetSpeed=desktop&&stamp-lastInteraction>1200?Math.PI/40:0;
    spinSpeed+=(targetSpeed-spinSpeed)*(1-Math.exp(-dt/.8));
    // Negative Y rotation is clockwise when viewed from above; one turn / 80s.
    spin=(spin-dt*spinSpeed)%(Math.PI*2);
    root.position.y=Math.sin(time*.6)*.018;root.rotation.x=Math.sin(time*.45)*.008;
    root.rotation.y=spin;root.rotation.z=Math.sin(time*.6)*.006;
   }
   if(rotationTarget!==null){
    const sphere=new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
    let delta=rotationTarget-sphere.theta;delta=Math.atan2(Math.sin(delta),Math.cos(delta));
    if(Math.abs(delta)<.005){rotationTarget=null;turning=false;}else{sphere.theta+=delta*(reduced?1:.12);camera.position.copy(new THREE.Vector3().setFromSpherical(sphere).add(controls.target));}
   }
   const changed=controls.update();renderer.render(scene,camera);
   if(moving||dragging||changed||turning)requestFrame();
  };
  function requestFrame(){if(!frame&&!disposed&&visible&&!document.hidden)frame=requestAnimationFrame(renderLoop);}
  const turn=direction=>{
   const sphere=new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
   rotationTarget=(rotationTarget??sphere.theta)+direction*Math.PI/4;turning=true;requestFrame();
   announce(direction>0?'Vista girada 45 graus para a direita.':'Vista girada 45 graus para a esquerda.');
  };
  const reset=()=>{camera.position.set(6,3.5,12);rotationTarget=null;turning=false;spin=0;spinSpeed=0;lastInteraction=performance.now();root.rotation.set(0,0,0);root.position.y=0;fit();announce('Perspectiva inicial restaurada.');};
  const togglePause=()=>{userPaused=!userPaused;spinSpeed=0;announce(userPaused?'Rotação pausada.':'Rotação retomada.');requestFrame();};
  const keydown=event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();turn(event.key==='ArrowLeft'?-1:1);}if(event.key==='Home'){event.preventDefault();reset();}if(event.code==='Space'||event.key===' '){event.preventDefault();if(!event.repeat)togglePause();}};
  canvas.addEventListener('keydown',keydown);disposables.push(()=>canvas.removeEventListener('keydown',keydown));
  const motionChange=event=>{reduced=event.detail.reduced;controls.enableDamping=!reduced;if(reduced){spinSpeed=0;root.rotation.x=0;root.rotation.z=0;root.position.y=0;}requestFrame();};
  document.addEventListener('azyra:motion',motionChange);disposables.push(()=>document.removeEventListener('azyra:motion',motionChange));
  reduced=window.AzyraMotion?.reduced??preference.matches;controls.enableDamping=!reduced;
  const visibilityChange=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;lastTime=0;}else requestFrame();};document.addEventListener('visibilitychange',visibilityChange);disposables.push(()=>document.removeEventListener('visibilitychange',visibilityChange));
  const lost=event=>{event.preventDefault();disposed=true;cancelAnimationFrame(frame);frame=0;fallback.hidden=false;canvas.hidden=true;document.querySelector('#scene-help').textContent='Referência visual da balança.';announce('Visualização estática. Recarregue a página para tentar retomar o 3D.');};canvas.addEventListener('webglcontextlost',lost);disposables.push(()=>canvas.removeEventListener('webglcontextlost',lost));
  window.Azyra3D={root,model,camera,controls,turn,reset,togglePause,get state(){return{reduced,userPaused,visible,dragging,desktop,hovered,focused,clockwiseAngle:spin,autoRotating:desktop&&!reduced&&!userPaused&&!dragging&&!hovered&&!focused};}};
  fit();renderer.render(scene,camera);fallback.hidden=true;host.classList.add('is-ready');announce('3D pronto. Explore com mouse ou teclado.');requestFrame();
 }catch(error){
  disposed=true;disposables.forEach(fn=>fn());controls?.dispose();environment?.dispose();renderer?.dispose();host.querySelector('canvas')?.remove();fallback.hidden=false;
  document.querySelector('#scene-help').textContent='Referência visual da balança.';announce('Visualização estática disponível. Seu navegador não iniciou a experiência 3D.');
  console.warn('Azyra 3D unavailable:',error.message);
 }
 function dispose(){disposed=true;cancelAnimationFrame(frame);resizeObserver?.disconnect();visibilityObserver?.disconnect();controls?.dispose();disposables.forEach(fn=>fn());environment?.dispose();const seen=new Set();window.Azyra3D?.model.traverse(m=>{if(m.isMesh){m.geometry.dispose();const materials=Array.isArray(m.material)?m.material:[m.material];materials.forEach(mat=>{if(!seen.has(mat)){seen.add(mat);mat.dispose();}});}});renderer?.dispose();}
 window.addEventListener('pagehide',event=>{if(!event.persisted)dispose();});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startScene,{once:true});else startScene();
