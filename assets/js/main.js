
jQuery(document).ready(function ($) {
  $('.ido-card-slider').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    prevArrow: $('.ido-slick-prev'),
      nextArrow: $('.ido-slick-next'),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint:991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    
     
    });
    $('.flip-custom').slideShowAd({
      interval: '3000',
      slideShowType: 'flipY',
      targetBlank: true
    });

  // menu bg add
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 300) {
          $('header').addClass('menu-bg-fixed');
      } else {
          $('header').removeClass('menu-bg-fixed');
      }
  });
  

})
