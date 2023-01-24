(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-pc-open]"),
      closeModalBtn: document.querySelector("[data-modal-pc-close]"),
      modal: document.querySelector("[data-modal-pc]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();