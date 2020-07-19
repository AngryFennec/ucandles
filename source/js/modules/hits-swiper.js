'use strict';

(function () {
  var hitSliders = document.querySelectorAll('.js-hits-swiper');
  if (!hitSliders.length) {
    return;
  }

  var hitSlider = function (slider) {
    return new window. Swiper(slider, {
      slidesPerView: 'auto',
      // centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          // slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 24
        },
        767: {
          // slidesPerView: 1,
          // centeredSlides: true,
          spaceBetween: 45
        },
      }
    });
  };

  hitSliders.forEach(function (slider) {
    hitSlider(slider);
  });
})();
