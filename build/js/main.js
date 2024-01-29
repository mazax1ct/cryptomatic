//открытие главного меню на мобильных
$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('overflow');
  $('.main-menu').addClass('is-open');
  setTimeout(function() {
    $('.main-menu__inner').addClass('is-open');
  }, 100);
  return false;
});

//закрытие главного меню на мобильных
$(document).on('click', '.js-menu-closer', function () {
  $('.main-menu__inner').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('overflow');
    $('.main-menu').removeClass('is-open');
  }, 400);
  return false;
});

$(document).ready(function () {
  //следящее меню
  if ($('.js-main-menu').length) {
    $('.js-main-menu').ddscrollSpy({
      highlightclass: 'is-active',
      scrolltopoffset: -80
    });
  }
});

if ($('.js-results-slider').length) {
  const swiper = new Swiper('.js-results-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 3
      }
    }
  });
}


//аккордион
$(document).on('click', '.accordion__toggler', function () {
  $(this).closest('.accordion').toggleClass('is-open');
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});
