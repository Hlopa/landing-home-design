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

$('.header-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let currentNum = 0;
    if(currentSlide < nextSlide){
      currentNum = currentSlide+1;
    }else if(currentSlide > nextSlide){
      currentNum = currentSlide-1;
    };

    let currentItem = slideItems[currentNum];  
    let itemTitle = currentItem.querySelector('.header-slider__item-title');
    let itemText = currentItem.querySelector('.header-slider__item-text');
    let itemBtn = currentItem.querySelector('.header-btn');

    if(currentItem){
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
    slidesToScroll: 1,
   })


 });
