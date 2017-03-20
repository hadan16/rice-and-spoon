$(document).ready(function(){

  //slick image carousel
  'use strict';
  $('.your-class').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 3,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //smooth scrolling
  $(document).on('click', 'a', function(event){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - $('nav').outerHeight()
    }, 500);
  });

  //collapse menu after click
  $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
          $(this).collapse('hide');
      }
  });


  //scroll reveal
  window.sr = ScrollReveal();
  sr.reveal('.one');
  sr.reveal('.two');
  sr.reveal('.three');
  sr.reveal('.four');
  sr.reveal('.five');
  sr.reveal('.six');


});
