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
  $(document).on('click', 'a.nav-link', function(event){
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


 //animate social icons
  $('.social-call').on('mouseover', function(){
    $('.social-call').addClass('animated rotateIn');
    $('.social-call').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.social-call').removeClass('animated rotateIn');
    });
  });

  $('.social-yelp').on('mouseover', function(){
    $('.social-yelp').addClass('animated rotateIn');
    $('.social-yelp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.social-yelp').removeClass('animated rotateIn');
    });
  });

  $('.social-fb').on('mouseover', function(){
    $('.social-fb').addClass('animated rotateIn');
    $('.social-fb').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.social-fb').removeClass('animated rotateIn');
    });
  });

  $('.social-email').on('mouseover', function(){
    $('.social-email').addClass('animated rotateIn');
    $('.social-email').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $('.social-email').removeClass('animated rotateIn');
    });
  });



//scroll to view animation
  window.sr = ScrollReveal();
  sr.reveal('.one');
  sr.reveal('.two');



//popup modal menu 1
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  //popup modal menu 2
  // Get the modal
  var modal = document.getElementById('myModal2');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg2');
  var modalImg = document.getElementById("img02");
  var captionText = document.getElementById("caption2");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }



});
