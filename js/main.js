'user strict';

// Preloader
$(window).on('load', function () {
  $('.preloader').fadeOut(1000);
});


//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

$('.menu li a').on('click', function () {
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('ul').slideDown(300, "swing");
    element.siblings('li').children('ul').slideUp(300, "swing");
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(300, "swing");
  }
});

// Responsive Menu
var headerTrigger = $('.header-trigger');
headerTrigger.on('click', function () {
  $('.menu').toggleClass('active')
  $('.overlay').toggleClass('active')
});

var headerTrigger2 = $('.top-bar-trigger');
headerTrigger2.on('click', function () {
  $('.header-top').toggleClass('active')
  $('.overlay').addClass('active')
  $('.overlay').removeClass('active')
});

// Overlay Event
var over = $('.overlay');
over.on('click', function () {
  $('.overlay').removeClass('overlay-color')
  $('.overlay').removeClass('active')
  $('.menu, .header-trigger').removeClass('active')
  $('.header-top').removeClass('active')
})


// Sticky Menu
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


// Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 500) {
    scrollTop.removeClass("active");
  } else {
    scrollTop.addClass("active");
  }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 300);
  return false;
});

$('.feature__slider').slick({
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: true,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },

  ]
});

$('.testimonial-slider').slick({
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: true,
  arrows: false,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },

  ]
});

$('.top-investor-slider').slick({
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
      }
    },

  ]
});

// Odometer Counter
$(".counter__item, .dashboard__card__item").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll('.odometer')[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});

//Faq
$('.faq-item__title').on('click', function (e) {
  var element = $(this).parent('.faq-item');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('.faq-item__content').removeClass('open');
    element.find('.faq-item__content').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('.faq-item__content').slideDown(300, "swing");
    element.siblings('.faq-item').children('.faq-item__content').slideUp(300, "swing");
    element.siblings('.faq-item').removeClass('open');
    element.siblings('.faq-item').find('.faq-item__content').slideUp(300, "swing");
  }
});


$('.user-thumb').on('click', function () {
  $('.dashboard__sidebar').addClass('active')
  $('.overlay').addClass('active')
})

$('.single-select').on('click', function () {
  $('.single-select').removeClass('active')
  $(this).addClass('active')
})

$('.btn-close, .overlay').on('click', function () {
  $('.overlay').removeClass('active')
  $('.menu').removeClass('active')
})

$('.how-item').on('mouseover', function () {
  $('.how-item').removeClass('active')
  $(this).addClass('active')
})

// Dashboard Collapse Expand
$('.user-toggler').on('click', function () {
  $('.dashboard-sidebar').toggleClass('active')
  $('.overlay').toggleClass('overlay-color')
});
$('.close-dashboard, .overlay').on('click', function () {
  $('.dashboard-sidebar').removeClass('active')
  $('.overlay').removeClass('overlay-color')
});

document.addEventListener('DOMContentLoaded', function () {
  // Wait for Swiper to be available
  if (typeof Swiper === 'undefined') {
    console.error('Swiper is not loaded');
    return;
  }

  const gameSwiper = new Swiper('.swiper-section .game-swiper', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: false,
    centeredSlides: false,
    grabCursor: true,
    watchSlidesProgress: true,
    parallax: true,
    speed: 600,
    effect: 'slide',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-section .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-section .swiper-button-next',
      prevEl: '.swiper-section .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: false,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 25,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: false,
      }
    },
    on: {
      init: function () {
        // Add initialized class for animations
        this.el.classList.add('swiper-initialized');
      },
      slideChange: function () {
        // Add subtle haptic feedback effect
        this.slides.forEach((slide, index) => {
          if (index === this.activeIndex) {
            slide.style.transform = 'scale(1)';
          }
        });
      },
      touchStart: function () {
        // Pause autoplay on touch
        this.autoplay.stop();
      },
      touchEnd: function () {
        // Resume autoplay after touch
        setTimeout(() => {
          this.autoplay.start();
        }, 2000);
      }
    }
  });

  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'containerFadeIn 0.8s ease forwards';
      }
    });
  }, observerOptions);

  const swiperContainer = document.querySelector('.swiper-section .game-swiper-container');
  if (swiperContainer) {
    observer.observe(swiperContainer);
  }
});