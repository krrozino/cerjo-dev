(()=>{const allowed=new Set(["https://padua-floodsim.vercel.app","https://landing-page-rosangela.vercel.app"]);document.querySelectorAll(".demo-button").forEach(button=>button.addEventListener("click",()=>{const url=button.dataset.demo;if(!allowed.has(url))return;const parent=button.closest(".live-demo");const frameBox=parent.querySelector(".live-frame");if(frameBox.hasChildNodes())return;const frame=document.createElement("iframe");frame.title="Demonstração ao vivo do projeto (site externo)";frame.loading="lazy";frame.referrerPolicy="strict-origin-when-cross-origin";frame.allow="";frame.src=url;frameBox.appendChild(frame);frameBox.hidden=false;button.disabled=true;button.textContent="Demonstração carregada";}));})();

/* Componentes de prévia pública: apenas alterna o tamanho do iframe externo,
   sem acessar seu DOM nem carregar qualquer projeto privado. */
document.querySelectorAll("[data-public-preview]").forEach(preview=>{
  const controls=preview.querySelectorAll("[data-preview-device]");
  controls.forEach(control=>control.addEventListener("click",()=>{
    const mobile=control.dataset.previewDevice==="mobile";
    preview.classList.toggle("is-mobile",mobile);
    controls.forEach(item=>item.setAttribute("aria-pressed",String(item===control)));
  }));
});
