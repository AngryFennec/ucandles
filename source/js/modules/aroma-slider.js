(function() {
  var aromaSelector = document.querySelector('.aroma__swiper-container');
  if (aromaSelector) {
    var swiper = new Swiper(aromaSelector, {
      slidesPerView: 'auto',
      spaceBetween: 32,
      freeMode: true,
      breakpoints: {
        320: {
          spaceBetween: 23
        },
        768: {
          spaceBetween: 24,
        },
        1440: {
          spaceBetween: 29,
        }
      }
    });
  }
})();
