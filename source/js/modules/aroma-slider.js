(function() {
  var aromaSelector = document.querySelector('.aroma__swiper-container');
  if (aromaSelector) {
  var swiper = new Swiper(aromaSelector, {
  slidesPerView: 'auto',
  spaceBetween: 29,
  freeMode: true,
});
}
})();
