$(function(){
   'use strict';


    // Banner slider js

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });


      // About video js 

      $('.venobox').venobox();


       // Test Banner slider js

    $('.test_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,

      
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });


    // counter up js

    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

    // client slider js

    $('.client_slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows: false,
      nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
      prevArrow: '<i class="fas fa-angle-left prv_arr"></i>',
      dots: false,
         
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,                     
          slidesToScroll: 1,
          arrows: false,
          
        }
      }
    ]
    });
});