(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menus-open]"),
    closeModalBtn: document.querySelector("[data-menus-close]"),
    modal: document.querySelector("[data-menus]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
