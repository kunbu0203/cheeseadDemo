// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.


(function (targetWidth) {
  var deviceWidth = screen.width;
  var ratio = deviceWidth / targetWidth;
  var viewport = document.querySelector('meta[name="viewport"]');

  if (ratio < 1) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=' + ratio + ', minimum-scale=' + ratio + ', maximum-scale=' + ratio + ', user-scalable=yes');
  }
})(375);

$('.header-burger').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('-menuOpen');
});
new Swiper('.step-slider', {
  slidesPerView: 'auto'
});
$('[data-anchor-btn]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top
  }, 300);
  $('body').removeClass('-menuOpen');
});
AOS.init({
  duration: 800,
  once: true
});
$('[data-popup-open]').on('click', function (e) {
  e.preventDefault();
  $('[data-popup="' + $(this).data('popup-open') + '"]').addClass('-open');
  $('body').addClass('-popupOpen');
});
$('[data-popup-close]').on('click', function (e) {
  e.preventDefault();
  $('[data-popup]').removeClass('-open');
  $('body').removeClass('-popupOpen');
});