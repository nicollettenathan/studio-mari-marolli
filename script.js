// Load final hero refinements after the main stylesheet.
const heroFix=document.createElement('link');
heroFix.rel='stylesheet';
heroFix.href='hero-fix.css?v=5';
document.head.appendChild(heroFix);

// The official Mari Marolli logo is embedded in styles.css and applied to the existing logo images.
const links=[...document.querySelectorAll('nav a')],sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{
  let c='inicio';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)c=s.id});
  links.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+c?'#e3b65d':''});
});