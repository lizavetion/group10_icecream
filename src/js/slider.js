var slider2 = new Swiper('.slider2', {
  effect: 'flip',
  direction: 'horizontal',
  loop: true,
  speed: 1000,

  flipEffect: {
    slideShadows: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
