$(function () {
  // 進場
  $(window).scroll(function () {
    var scrollT = $(this).scrollTop(),
        screenH = $(window).height();
    $('[data-animate]').each(function (index, el) {
      if (scrollT + screenH - 100 > $(el).offset().top) {
        $(el).attr('data-animate-active', true);
      }
    });
    var floatTop;

    if (Modernizr.mq('(max-width: 767px)')) {
      floatTop = '80vw';
    } else if (Modernizr.mq('(max-width: 1023px)')) {
      floatTop = '45vw';
    } else {
      floatTop = '32vw';
    }

    $('[data-float]').css('top', "calc(".concat(scrollT, "px + ").concat(floatTop, ")"));
  }).trigger('scroll'); // 選單

  $('[data-burger]').on('click', function (e) {
    e.preventDefault();
    $('[data-nav]').toggleClass('-open');
  });
  var bannerSwiper = new Swiper('[data-slider="banner"]', {
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      activeIndexChange: function activeIndexChange() {
        $('[data-banner-block]').removeClass('-active');
        $('[data-banner-block]').eq(this.activeIndex).addClass('-active');
      }
    }
  }); // 錨點

  $(window).on('scroll', function () {
    $('[data-anchor]').toggleClass('-fixed', $(window).scrollTop() > $('[data-anchor]').offset().top);
  }).trigger('scroll');
  $('[data-anchor-btn]').on('click', function (e) {
    e.preventDefault();
    var navHeight = Modernizr.mq('(max-width: 767px)') ? 0 : $('[data-anchor]').outerHeight();
    $('html, body').animate({
      scrollTop: $('[data-anchor-block="' + $(this).data('anchor-btn') + '"]').offset().top - navHeight
    }, 300);
    $('[data-nav]').removeClass('-open');
  });
  var travelSwiper = new Swiper('[data-slider="travel"]', {
    slidesPerView: 3,
    spaceBetween: '3.5%',
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.travel-arrow.swiper-button-next',
      prevEl: '.travel-arrow.swiper-button-prev'
    },
    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1,
        spaceBetween: '50%'
      }
    }
  });
  var place01Swiper = new Swiper('[data-slider="place01"]', {
    slidesPerView: 1,
    spaceBetween: '10%',
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.place-arrow.swiper-button-next.-place01',
      prevEl: '.place-arrow.swiper-button-prev.-place01'
    },
    breakpoints: {
      767: {
        spaceBetween: '60%'
      }
    }
  });
  var place02Swiper = new Swiper('[data-slider="place02"]', {
    slidesPerView: 1,
    spaceBetween: '10%',
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.place-arrow.swiper-button-next.-place02',
      prevEl: '.place-arrow.swiper-button-prev.-place02'
    },
    breakpoints: {
      767: {
        spaceBetween: '60%'
      }
    }
  });
  var place03Swiper = new Swiper('[data-slider="place03"]', {
    slidesPerView: 1,
    spaceBetween: '10%',
    speed: 1000,
    loop: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.place-arrow.swiper-button-next.-place03',
      prevEl: '.place-arrow.swiper-button-prev.-place03'
    },
    breakpoints: {
      767: {
        spaceBetween: '60%'
      }
    }
  });
});