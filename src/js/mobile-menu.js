(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    closeMenuLink: document.querySelectorAll('.nav-link'),
    buyNowBtn: document.querySelector('.button-buy-now'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.menu.classList.toggle('is-open');
	refs.closeMenuLink.forEach(item => item.addEventListener("click", toggleMenu));
    refs.buyNowBtn.addEventListener("click", toggleMenu);
  }
})();