const nv=document.getElementById('nv');addEventListener('scroll',()=>nv.classList.toggle('s',scrollY>60));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('v');
e.target.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n,d=n%1?1:0;let t=0;const f=()=>{t+=.04;el.textContent=(n*Math.min(t,1)).toFixed(d);if(t<1)requestAnimationFrame(f)};f()});
e.target.querySelectorAll('[data-w]').forEach(u=>u.style.width=u.dataset.w+'%');io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.rev').forEach(el=>io.observe(el));
const dd=new Date().getDay();document.querySelectorAll('#hr tr').forEach(r=>{if(r.dataset.d.split(',').includes(String(dd)))r.className='n'});
const lb=document.getElementById('lb');document.querySelectorAll('.gal i,.ph').forEach(i=>i.onclick=()=>{lb.style.backgroundImage=getComputedStyle(i).backgroundImage;lb.classList.add('o')});document.querySelectorAll('.menu img').forEach(i=>i.onclick=()=>{lb.style.backgroundImage='url('+i.src+')';lb.classList.add('o')});lb.onclick=()=>lb.classList.remove('o');
