'use strict';
(()=>{
 const track=document.querySelector('#resource-track');
 const slider=document.querySelector('#gallery-position');
 const current=document.querySelector('#gallery-current');
 const cards=[...track.querySelectorAll('.resource-card')];
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const reduced=()=>preference.matches||document.body.classList.contains('reduced-motion');
 const maximum=()=>Math.max(0,track.scrollWidth-track.clientWidth);
 const cardPosition=index=>Math.min(maximum(),cards[index].offsetLeft-cards[0].offsetLeft);
 function sync(){
  const max=maximum(),position=Math.max(0,Math.min(max,track.scrollLeft));
  let index=0;
  if(max>0){
   index=cards.reduce((best,card,i)=>Math.abs(cardPosition(i)-position)<Math.abs(cardPosition(best)-position)?i:best,0);
   if(position>=max-2)index=cards.length-1;
  }
  slider.value=String(max?position/max*100:0);
  slider.disabled=max<=0;
  slider.style.setProperty('--position',slider.value+'%');
  slider.setAttribute('aria-valuetext',`Recurso ${index+1} de ${cards.length}: ${cards[index].querySelector('h3').textContent}`);
  current.textContent=String(index+1).padStart(2,'0');
 }
 function moveTo(left,instant=false){track.scrollTo({left,behavior:instant||reduced()?'instant':'smooth'});}
 slider.addEventListener('input',()=>moveTo(maximum()*Number(slider.value)/100,true));
 // Keyboard navigation belongs to the region; card buttons keep their own keys.
 track.addEventListener('keydown',event=>{
  if(event.target!==track)return;
  const first=cards[0],step=cards[1]?cards[1].offsetLeft-first.offsetLeft:first.offsetWidth;
  let left;
  if(event.key==='ArrowRight')left=track.scrollLeft+step;
  else if(event.key==='ArrowLeft')left=track.scrollLeft-step;
  else if(event.key==='Home')left=0;
  else if(event.key==='End')left=maximum();
  else return;
  event.preventDefault();moveTo(Math.max(0,Math.min(maximum(),left)));
 });
 let drag=null,suppressClick=false;
 track.addEventListener('pointerdown',event=>{
  if(event.pointerType!=='mouse'||event.button!==0)return;
  suppressClick=false;drag={id:event.pointerId,x:event.clientX,left:track.scrollLeft,active:false};
 });
 track.addEventListener('pointermove',event=>{
  if(!drag||event.pointerId!==drag.id)return;
  const distance=event.clientX-drag.x;
  if(!drag.active&&Math.abs(distance)>6){
   drag.active=true;track.classList.add('is-dragging');track.setPointerCapture(event.pointerId);
  }
  if(drag.active){event.preventDefault();track.scrollLeft=drag.left-distance;}
 });
 function endDrag(event){
  if(!drag||event.pointerId!==drag.id)return;
  const {active,id}=drag;drag=null;
  if(active){
   suppressClick=true;track.classList.remove('is-dragging');
   if(track.hasPointerCapture(id))track.releasePointerCapture(id);
  }
 }
 track.addEventListener('pointerup',endDrag);
 track.addEventListener('pointercancel',endDrag);
 track.addEventListener('lostpointercapture',endDrag);
 track.addEventListener('pointerleave',event=>{if(drag&&!drag.active)endDrag(event);});
 track.addEventListener('click',event=>{if(suppressClick){event.preventDefault();event.stopImmediatePropagation();suppressClick=false;}},true);
 track.addEventListener('dragstart',event=>event.preventDefault());
 track.addEventListener('scroll',sync,{passive:true});
 window.addEventListener('resize',sync,{passive:true});
 let observer;
 if('ResizeObserver' in window){observer=new ResizeObserver(sync);observer.observe(track);}
 document.fonts?.ready.then(sync);
 sync();
 const top=document.querySelector('#back-to-top');
 function syncTop(){top.hidden=scrollY<500&&document.activeElement!==top;}
 top.addEventListener('click',event=>{
  event.preventDefault();
  const heading=document.querySelector('#hero-title');
  heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});
  heading.addEventListener('blur',()=>heading.removeAttribute('tabindex'),{once:true});
  window.scrollTo({top:0,behavior:reduced()?'instant':'smooth'});
 });
 top.addEventListener('blur',syncTop);
 window.addEventListener('scroll',syncTop,{passive:true});syncTop();
 window.addEventListener('pagehide',event=>{if(!event.persisted)observer?.disconnect();});
})();
