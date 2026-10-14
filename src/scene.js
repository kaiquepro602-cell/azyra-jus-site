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
 const pause=document.querySelector('#balance-pause');
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let renderer,environment,controls,resizeObserver,visibilityObserver;
 const disposables=[];
 let frame=0,visible=true,dragging=false,userPaused=false,reduced=preference.matches,disposed=false,time=0,lastTime=0;
 let rotationTarget=null,turning=false;
 const announce=text=>{status.textContent=text};
 try{
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.setClearColor(0,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=.95;
  const canvas=renderer.domElement;
  canvas.id='balance-canvas';canvas.tabIndex=0;
  canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Balança dourada em 3D. Arraste horizontalmente para girar 360 graus. Use as setas do teclado para girar e a tecla Home para restaurar.');
  canvas.setAttribute('aria-describedby','scene-help');canvas.style.touchAction='pan-y';
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
  camera.position.set(3.2,2.1,14);
  const hemisphere=new THREE.HemisphereLight(0xfff1dc,0x063c2e,.65);scene.add(hemisphere);
  const key=new THREE.DirectionalLight(0xfff2dc,2.6);key.position.set(-4,6,6);scene.add(key);
  const rim=new THREE.DirectionalLight(0xffdb91,1.8);rim.position.set(5,2,-4);scene.add(rim);
  const root=new THREE.Group();scene.add(root);
  const model=refineBalanceModel(createBalance({castShadow:false,receiveShadow:false,textureSize:32}));
  model.position.y=-2.68;root.add(model);
  controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.075;
  controls.enablePan=false;controls.enableZoom=false;controls.minPolarAngle=.32;controls.maxPolarAngle=Math.PI-.32;
  controls.rotateSpeed=.65;controls.target.set(0,0,0);controls.update();
  controls.addEventListener('start',()=>{dragging=true;rotationTarget=null;turning=false;requestFrame();});
  controls.addEventListener('end',()=>{dragging=false;requestFrame();});
  controls.addEventListener('change',requestFrame);
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
   const moving=!reduced&&!userPaused&&!dragging;
   if(moving){time+=dt;root.position.y=Math.sin(time*.6)*.024;root.rotation.x=Math.sin(time*.45)*.012;root.rotation.y=Math.sin(time*.3)*.055;root.rotation.z=Math.sin(time*.6)*.009;}
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
  const reset=()=>{camera.position.set(3.2,2.1,14);rotationTarget=null;turning=false;root.rotation.set(0,0,0);root.position.y=0;fit();announce('Perspectiva inicial restaurada.');};
  const syncPause=()=>{const stopped=userPaused||reduced;pause.setAttribute('aria-pressed',String(stopped));pause.textContent=stopped?'Retomar balanço':'Pausar balanço';pause.disabled=reduced;};
  const pauseClick=()=>{userPaused=!userPaused;syncPause();requestFrame();};pause.addEventListener('click',pauseClick);disposables.push(()=>pause.removeEventListener('click',pauseClick));
  document.querySelectorAll('[data-turn]').forEach(button=>{const fn=()=>turn(Number(button.dataset.turn));button.addEventListener('click',fn);disposables.push(()=>button.removeEventListener('click',fn));});
  const resetButton=document.querySelector('#balance-reset');resetButton.addEventListener('click',reset);disposables.push(()=>resetButton.removeEventListener('click',reset));
  const keydown=event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();turn(event.key==='ArrowLeft'?-1:1);}if(event.key==='Home'){event.preventDefault();reset();}};
  canvas.addEventListener('keydown',keydown);disposables.push(()=>canvas.removeEventListener('keydown',keydown));
  const motionChange=event=>{reduced=event.detail.reduced||preference.matches;controls.enableDamping=!reduced;if(reduced){root.rotation.set(0,0,0);root.position.y=0;}syncPause();requestFrame();};
  document.addEventListener('azyra:motion',motionChange);disposables.push(()=>document.removeEventListener('azyra:motion',motionChange));
  reduced=preference.matches||document.body.classList.contains('reduced-motion');controls.enableDamping=!reduced;
  const visibilityChange=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;lastTime=0;}else requestFrame();};document.addEventListener('visibilitychange',visibilityChange);disposables.push(()=>document.removeEventListener('visibilitychange',visibilityChange));
  const lost=event=>{event.preventDefault();disposed=true;cancelAnimationFrame(frame);frame=0;fallback.hidden=false;canvas.hidden=true;document.querySelectorAll('.balance-controls button').forEach(b=>b.disabled=true);document.querySelector('#scene-help').textContent='Referência visual da balança.';announce('Visualização estática. Recarregue a página para tentar retomar o 3D.');};canvas.addEventListener('webglcontextlost',lost);disposables.push(()=>canvas.removeEventListener('webglcontextlost',lost));
  window.Azyra3D={root,model,camera,controls,turn,reset,get state(){return{reduced,userPaused,visible,dragging};}};
  syncPause();fit();renderer.render(scene,camera);fallback.hidden=true;host.classList.add('is-ready');announce('3D pronto. Arraste para explorar 360 graus.');requestFrame();
 }catch(error){
  disposed=true;disposables.forEach(fn=>fn());controls?.dispose();environment?.dispose();renderer?.dispose();host.querySelector('canvas')?.remove();fallback.hidden=false;
  document.querySelectorAll('.balance-controls button').forEach(b=>b.disabled=true);
  document.querySelector('#scene-help').textContent='Referência visual da balança.';announce('Visualização estática disponível. Seu navegador não iniciou a experiência 3D.');
  console.warn('Azyra 3D unavailable:',error.message);
 }
 function dispose(){disposed=true;cancelAnimationFrame(frame);resizeObserver?.disconnect();visibilityObserver?.disconnect();controls?.dispose();disposables.forEach(fn=>fn());environment?.dispose();const seen=new Set();window.Azyra3D?.model.traverse(m=>{if(m.isMesh){m.geometry.dispose();const materials=Array.isArray(m.material)?m.material:[m.material];materials.forEach(mat=>{if(!seen.has(mat)){seen.add(mat);mat.dispose();}});}});renderer?.dispose();}
 window.addEventListener('pagehide',event=>{if(!event.persisted)dispose();});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startScene,{once:true});else startScene();
