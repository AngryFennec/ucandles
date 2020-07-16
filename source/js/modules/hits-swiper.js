'use strict';

(function () {
  var hitSliders = document.querySelectorAll('.js-hits-swiper');
  if (!hitSliders.length) {
    return;
  }

  var hitSlider = function (slider) {
    return new window. Swiper(slider, {
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        767: {
          slidesPerView: 1,
        },
      }
    });
  };

  hitSliders.forEach(function (slider) {
    hitSlider(slider);
  });
})();
