'use strict';
(function () {
  var cursor = document.querySelector('.cursor');

  if (!cursor) {
    return;
  }

  var setCursorPosition = function (evt) {
    var xPosition = evt.clientX - cursor.clientWidth / 2 + 'px';
    var yPosition = evt.clientY - cursor.clientHeight / 2 + 'px';
    cursor.style.transform =
      'translate(' + xPosition + ',' + yPosition + ')';
    return {
      x: xPosition,
      y: yPosition
    };
  };

  document.addEventListener('mousemove', function (evt) {
    setCursorPosition(evt);
  });

  var slides = document.querySelectorAll('.js-slider');

  Array.prototype.forEach.call(slides, function (slide) {
    slide.addEventListener('mouseenter', function (evt) {
      setCursorPosition(evt);
      cursor.classList.add('active');
    });
    slide.addEventListener('mouseleave', function (evt) {
      setCursorPosition(evt);
      if (cursor.classList.contains('active')) {
        cursor.classList.remove('active');
      }
    });
  });

})();
// $(".slider-top__tooltip").mousemove(function (evt) {
//   var hovertext = $(this).attr("data-title");
//   $(".page-main__hovertitle").text(hovertext).show();
//   $(".page-main__hovertitle").css("top", evt.clientY + 12).css("left", evt.clientX + 12);
// }).mouseout(function () {
//   $(".page-main__hovertitle").hide();
// });
