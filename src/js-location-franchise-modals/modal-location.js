(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-ml-open]"),
    closeModalBtn: document.querySelector("[data-modal-ml-close]"),
    modal: document.querySelector("[data-modal-ml]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
})();