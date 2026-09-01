// Load final hero refinements after the main stylesheet.
const heroFix=document.createElement('link');
heroFix.rel='stylesheet';
heroFix.href='hero-fix.css?v=6';
document.head.appendChild(heroFix);

// Load higher-quality portrait sources without stretching the tiny fallback assets.
async function loadHiResPortraits(){
  try{
    const [left,right]=await Promise.all([
      fetch('assets/mari-left-hq.b64.txt?v=1').then(r=>{if(!r.ok)throw new Error('left portrait');return r.text()}),
      fetch('assets/mari-right-hq.b64.txt?v=1').then(r=>{if(!r.ok)throw new Error('right portrait');return r.text()})
    ]);

    const leftUrl=`data:image/webp;base64,${left.trim()}`;
    const rightUrl=`data:image/webp;base64,${right.trim()}`;

    const sideL=document.querySelector('.side-l');
    const sideR=document.querySelector('.side-r');
    if(sideL)sideL.style.backgroundImage=`linear-gradient(90deg,rgba(5,5,5,.03),rgba(5,5,5,.10) 48%,#050505 100%),url("${leftUrl}")`;
    if(sideR)sideR.style.backgroundImage=`linear-gradient(270deg,rgba(5,5,5,.03),rgba(5,5,5,.10) 48%,#050505 100%),url("${rightUrl}")`;

    document.querySelectorAll('.p1,.p3').forEach(el=>el.style.backgroundImage=`url("${leftUrl}")`);
    document.querySelectorAll('.p2').forEach(el=>el.style.backgroundImage=`url("${rightUrl}")`);
    const portrait=document.querySelector('.portrait');
    if(portrait)portrait.style.backgroundImage=`url("${leftUrl}")`;
  }catch(err){
    console.warn('High-resolution portraits could not be loaded.',err);
  }
}
loadHiResPortraits();

const links=[...document.querySelectorAll('nav a')],sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{
  let c='inicio';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)c=s.id});
  links.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+c?'#e3b65d':''});
});