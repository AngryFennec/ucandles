'use strict';
(function ($) {
  $('.category__link').mousemove(function (evt) {
    var hoverimg = $(this).attr('data-src');
    $('.category__img').show();
    $('.category__img').css('top', evt.clientY).css('left', evt.clientX).css('background-image', 'url("../' + hoverimg + '")');
  }).mouseout(function () {
    $('.category__img').hide();
  });
})(jQuery);
