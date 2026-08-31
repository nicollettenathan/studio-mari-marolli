// Hero refinements are loaded as an override so the original layout stays intact.
const heroFix=document.createElement('link');
heroFix.rel='stylesheet';
heroFix.href='hero-fix.css?v=4';
document.head.appendChild(heroFix);

// Always use the official Mari Marolli logo supplied for the project.
document.querySelectorAll('img[alt="Studio Mari Marolli"]').forEach(img=>{
  img.src='assets/logo-mari-original.png?v=4';
  img.decoding='async';
});

const links=[...document.querySelectorAll('nav a')],sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{
  let c='inicio';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)c=s.id});
  links.forEach(a=>{a.style.color=a.getAttribute('href')==='#'+c?'#e3b65d':''});
});