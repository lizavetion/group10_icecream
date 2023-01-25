(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-mf-open]"),
    closeModalBtn: document.querySelector("[data-modal-mf-close]"),
    modal: document.querySelector("[data-modal-mf]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
})();