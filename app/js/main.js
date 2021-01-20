'use scrict';

$(function () {

  $('.header-slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.slider-dots',
    prevArrow: '<div class="arrow arrow-left"><img class="slider-arrows slider-arrows__left" src="images/icons/arrow-left.svg" alt=""></img></div>',
    nextArrow: '<div class="arrow arrow-right"><img class="slider-arrows slider-arrows__right" src="images/icons/arrow-right.svg" alt=""></img></div>'
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header-slider',
    focusOnSelect: true
  });

  let slideItems = document.querySelectorAll('.header-slider__item');

  $('.header-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    let currentNum = 0;
    if (currentSlide < nextSlide) {
      currentNum = currentSlide + 1;
    } else if (currentSlide > nextSlide) {
      currentNum = currentSlide - 1;
    };

    let currentItem = slideItems[currentNum];
    let itemTitle = currentItem.querySelector('.header-slider__item-title');
    let itemText = currentItem.querySelector('.header-slider__item-text');
    let itemBtn = currentItem.querySelector('.header-btn');

    if (currentItem) {
      itemTitle.classList.add('animate__animated');
      itemTitle.classList.add('animate__slideInDown');


      itemText.classList.add('animate__animated');
      itemText.classList.add('animate__fadeInUp');
      itemText.classList.add('animate__delay-1s');


      itemBtn.classList.add('animate__animated');
      itemBtn.classList.add('animate__fadeInUp');
      itemBtn.classList.add('animate__delay-1s');

      itemTitle.addEventListener('animationend', () => {
        itemTitle.classList.remove('animate__animated');
        itemTitle.classList.remove('animate__slideInDown');
      });

      itemText.addEventListener('animationend', () => {
        itemText.classList.remove('animate__animated');
        itemText.classList.remove('animate__fadeInUp');
        itemText.classList.remove('animate__delay-1s');
      });

      itemBtn.addEventListener('animationend', () => {
        itemBtn.classList.remove('animate__animated');
        itemBtn.classList.remove('animate__fadeInUp');
        itemBtn.classList.remove('animate__delay-1s');
      });
    }

  });

  $('.project__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    dots: true
  })


  $('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

});

//скролл и анимация

let isScrolling = false;
let firstBox = document.querySelector(".contacts");
let mapItem1 = firstBox.querySelector('.contacts__map-item--1').querySelector('.contacts__map-marker');
let mapItem2 = firstBox.querySelector('.contacts__map-item--2').querySelector('.contacts__map-marker');
let mapItem3 = firstBox.querySelector('.contacts__map-item--3').querySelector('.contacts__map-marker');
let mapItem4 = firstBox.querySelector('.contacts__map-item--4').querySelector('.contacts__map-marker');
let mapItem5 = firstBox.querySelector('.contacts__map-item--5').querySelector('.contacts__map-marker');
let contactForm = firstBox.querySelector('.contact-form');

let aboutUs = document.querySelector('.about-us');
let aboutUs1 = aboutUs.querySelector('.about-us__images--1');
let aboutUs2 = aboutUs.querySelector('.about-us__images--2');

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

function isPartiallyVisible(el, num) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top - num;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height - num;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function addClasses(elem, arr) {
  arr.forEach(clas => {
    elem.classList.add(`${clas}`)
  })
  return elem
}


document.addEventListener("DOMContentLoaded", scrolling, false);

function scrolling(e) {
  if (isPartiallyVisible(firstBox, 200)) {
    addClasses(mapItem1, ['animate__animated', 'animate__fadeIn', 'animate__delay-1s', 'animate__slow']);
    addClasses(mapItem2, ['animate__animated', 'animate__fadeIn', 'animate__delay-2s', 'animate__slow']);
    addClasses(mapItem3, ['animate__animated', 'animate__fadeIn', 'animate__delay-3s', 'animate__slow']);
    addClasses(mapItem4, ['animate__animated', 'animate__fadeIn', 'animate__delay-4s', 'animate__slow']);
    addClasses(mapItem5, ['animate__animated', 'animate__fadeIn', 'animate__delay-5s', 'animate__slow']);
    addClasses(contactForm, ['animate__animated', 'animate__bounceInRight', 'animate__delay-3s']);
  }
  
  if (isPartiallyVisible(aboutUs, 50)) {
    addClasses(aboutUs1, ['animate__animated', 'animate__fadeInUp']);
    addClasses(aboutUs2, ['animate__animated', 'animate__fadeInRight', 'animate__delay-1s']);
  }

}


