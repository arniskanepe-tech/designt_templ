const LAYOUTS=[...Array(20)].map((_,i)=>({file:`layout${i+1}.html`,title:`Layout ${i+1}`}));
document.addEventListener("DOMContentLoaded",()=>{
 const list=document.querySelector('[data-layout-list]');
 if(list) LAYOUTS.forEach(l=>{const a=document.createElement('a');a.href=l.file;a.textContent=l.title;list.append(a,document.createElement('br'));});
 const nav=document.querySelector('[data-layout-nav]');
 if(nav){
  const sel=document.createElement('select');
  sel.onchange=()=>location.href=sel.value;
  sel.innerHTML='<option value="index.html">Index</option>'+LAYOUTS.map(l=>`<option value="${l.file}">${l.title}</option>`).join('');
  nav.append(sel);
 }
});
