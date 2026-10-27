/* As incorporações abaixo são somente de projetos públicos. Não acessar o DOM do iframe. */
(()=>{
  document.querySelectorAll("[data-public-preview]").forEach(preview=>{
    const controls=[...preview.querySelectorAll("[data-preview-device]")];
    controls.forEach(control=>control.addEventListener("click",()=>{
      const mobile=control.dataset.previewDevice==="mobile";
      preview.classList.toggle("is-mobile",mobile);
      controls.forEach(button=>button.setAttribute("aria-pressed",String(button===control)));
    }));
  });
})();
