'use strict';
(()=>{
 const g=window.gsap,preference=matchMedia('(prefers-reduced-motion: reduce)'),button=document.querySelector('#motion-toggle');
 let manual=false,context,media,observer,frame=0,cleanups=[];
 try{manual=sessionStorage.getItem('azyra-reduced-motion')==='true'}catch{}
 const reduced=()=>preference.matches||manual;
 function progress(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('#reading-progress').style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;}
 function build(){
  cleanups.forEach(fn=>fn());cleanups=[];observer?.disconnect();cancelAnimationFrame(frame);media?.revert();context?.revert();
  const off=reduced();document.body.classList.toggle('reduced-motion',off);button.setAttribute('aria-pressed',String(off));button.setAttribute('aria-label',off?'Movimento reduzido. Ativar animações quando permitido pelo sistema':'Reduzir animações do site');
  document.dispatchEvent(new CustomEvent('azyra:motion',{detail:{reduced:off}}));
  if(!g||off)return;
  if(window.ScrollTrigger)g.registerPlugin(ScrollTrigger);
  context=g.context(self=>{
   const on=(element,event,fn)=>{const safe=self.add(null,fn);element.addEventListener(event,safe);cleanups.push(()=>element.removeEventListener(event,safe));};
   g.timeline({defaults:{ease:'power3.out'}}).from('.hero-topline',{opacity:0,y:8,duration:.5},0).from('.hero-copy > *',{opacity:0,y:24,duration:.85,stagger:.055},.1).from('.balance-stage',{opacity:0,y:15,duration:1.05},.18).from('.hero-bottom',{opacity:0,duration:.5},.6);
   if(window.ScrollTrigger){
    document.querySelectorAll('.section-heading,.vision-copy,.brand-story-copy,.team-text,.faq-section > div,.contact-section').forEach(element=>{ScrollTrigger.create({trigger:element,start:'top 90%',once:true,onEnter:self.add(null,()=>g.fromTo(element,{opacity:.55,y:22},{opacity:1,y:0,duration:.7,ease:'power3.out',clearProps:'opacity,transform'}))});});
    document.querySelectorAll('.vision-image,.team-visual,.brand-story-image').forEach(element=>{ScrollTrigger.create({trigger:element,start:'top 90%',once:true,onEnter:self.add(null,()=>g.fromTo(element,{clipPath:'inset(8% 0 8% 0)'},{clipPath:'inset(0% 0 0% 0)',duration:1,ease:'power3.out',clearProps:'clipPath'}))});});
    const cards=document.querySelector('.evolution-grid');ScrollTrigger.create({trigger:cards,start:'top 90%',once:true,onEnter:self.add(null,()=>g.fromTo(cards.children,{opacity:.6,y:16},{opacity:1,y:0,duration:.7,stagger:.07,clearProps:'opacity,transform'}))});
    media=g.matchMedia();media.add('(min-width: 951px) and (pointer: fine)',()=>{g.fromTo('.brand-story-image img',{scale:1.06,yPercent:-2},{yPercent:2,ease:'none',scrollTrigger:{trigger:'.brand-story-image',start:'top bottom',end:'bottom top',scrub:.7}});});
    if('ResizeObserver'in window){observer=new ResizeObserver(()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>ScrollTrigger.refresh());});observer.observe(document.querySelector('#interactive-preview'));}
   }
   document.querySelectorAll('.line-button,.balance-controls button,.gallery-controls button').forEach(el=>{on(el,'pointerenter',()=>g.to(el,{y:-2,duration:.18,overwrite:'auto'}));on(el,'pointerleave',()=>g.to(el,{y:0,duration:.3,overwrite:'auto',clearProps:'transform'}));});
   on(document,'azyra:view',()=>g.fromTo('#demo .metric,#demo .table',{opacity:.65,y:8},{opacity:1,y:0,duration:.35,stagger:.04,clearProps:'opacity,transform'}));
   document.querySelectorAll('dialog').forEach(dialog=>{const mutation=new MutationObserver(self.add(null,()=>{if(dialog.open)g.fromTo(dialog,{opacity:0,y:14},{opacity:1,y:0,duration:.3,clearProps:'opacity,transform'});}));mutation.observe(dialog,{attributes:true,attributeFilter:['open']});cleanups.push(()=>mutation.disconnect());});
  },document.body);
 }
 button.addEventListener('click',()=>{manual=!manual;try{sessionStorage.setItem('azyra-reduced-motion',String(manual))}catch{}build();});preference.addEventListener('change',build);
 addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress,{passive:true});document.addEventListener('azyra:view',progress);build();progress();
 addEventListener('pagehide',e=>{if(e.persisted)return;cleanups.forEach(fn=>fn());observer?.disconnect();cancelAnimationFrame(frame);media?.revert();context?.revert();});
})();
