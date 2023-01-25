var slider1 = new Swiper('.slider1', {
  // effect: 'creative',

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 20,
    stretch: 50,
    slidShadows: true,
  },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },

  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '1.5',
  spaceBetween: 20,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1800,
});
