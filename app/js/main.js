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
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
      media: {}
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

let workStep = document.querySelector('.work-step');
let workStepTitle = workStep.querySelector('.work-step__title');
let workStepInner = workStep.querySelector('.work-step__inner');

let offers = document.querySelector('.offers');
let offersTitle = offers.querySelector('.offers__title');
let offersText = offers.querySelector('.offers__text');
let offersList = offers.querySelector('.offers__list');

let advantages = document.querySelector('.advantages');
let advantagesItem1 = advantages.querySelector('.advantages__list-item--1');
let advantagesItem2 = advantages.querySelector('.advantages__list-item--2');
let advantagesItem3 = advantages.querySelector('.advantages__list-item--3');
let advantagesItem4 = advantages.querySelector('.advantages__list-item--4');


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


  if (isPartiallyVisible(workStep, 80)) {
    addClasses(workStepTitle, ['animate__animated', 'animate__fadeInLeft']);
    addClasses(workStepInner, ['animate__animated', 'animate__bounceInUp', 'animate__delay-1s']);
  }

  if (isPartiallyVisible(offers, 80)) {
    addClasses(offersTitle, ['animate__animated', 'animate__fadeInLeft']);
    addClasses(offersText, ['animate__animated', 'animate__fadeInLeft']);
    addClasses(offersList, ['animate__animated', 'animate__bounceInUp', 'animate__delay-1s']);
  }

  if (isPartiallyVisible(advantages, 0)) {
    addClasses(advantagesItem1, ['animate__animated', 'animate__fadeInLeftBig', 'animate__delay-3s']);
    addClasses(advantagesItem2, ['animate__animated', 'animate__fadeInLeftBig', 'animate__delay-2s']);
    addClasses(advantagesItem3, ['animate__animated', 'animate__fadeInLeftBig', 'animate__delay-1s']);
    addClasses(advantagesItem4, ['animate__animated', 'animate__fadeInLeftBig']);
  }

}


//калькулятор

const calc = (price = 100) => {
  const priceSection = document.querySelector('.price'),
    calcBlock = priceSection.querySelector('.price__box'),
    calcType = priceSection.querySelector('.prise__select'),
    calcSquare = priceSection.querySelector('.price-square'),
    calcDay = priceSection.querySelector('.price-day'),
    calcCount = priceSection.querySelector('.price-count'),
    totalValue = document.getElementById('total');

  const correctNum = (selector) => {
    selector.addEventListener('input', (e) => {
      const target = e.target;
      if (target.tagName === "INPUT") {
        target.value = target.value.replace(/[^\+?0-9\.]/g, '')
      }
    })
  };

  correctNum(calcBlock);

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;
    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }
    if (typeValue && squareValue) {
      total = parseInt(price * typeValue * squareValue * countValue * dayValue);
    }

    const animateTotal = () => {
      const target = +total;
      const count = +totalValue.textContent;
      let speed = 20;
      if (target > 5000 && target < 30000) {
        speed = 50
      } else if (target >= 30000 && target < 100000) {
        speed = 200
      } else if (target >= 100000) {
        speed = 4000
      }

      if (count < target) {
        totalValue.textContent = count + speed;
        setTimeout(animateTotal, 1)
      } else if (count > target + 50) {
        totalValue.textContent = count - speed;
        setTimeout(animateTotal, 1)
      } else {
        totalValue.textContent = total;
      }
    }
    animateTotal()
  };

  calcBlock.addEventListener('change', (e) => {
    const target = e.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  })
};

calc(100);



//плавный скролл

const getSmoothScroll = () => {
  const menu = document.querySelector('.menu'),
    ancors = menu.querySelector('ul').querySelectorAll('a'),
    btnDown = document.querySelector('.header__arrows-btn');

  const getScroll = (element) => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = element.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  ancors.forEach((item) => {
    getScroll(item)
  });
  getScroll(btnDown);
}

getSmoothScroll();


//popup

const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupBtns = document.querySelectorAll('.offers-item__link'),
    popupClose = document.querySelector('.popup-close');


  popupBtns.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.display = 'block';
    })
  });

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });


  popup.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none'
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  })

}
togglePopup();


let headerBurger = document.querySelector('.header__burger');
let menuList = document.querySelector('.menu__list');


headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('header__burger--active');
  menuList.classList.toggle('menu__list--open');

})