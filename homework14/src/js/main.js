// document.addEventListener("DOMContentLoaded", function(event){
//  const modal = document.querySelector('.modal');
//  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//  const closeBtn = document.querySelector('.modal__close');
//  const switchModal = () =>{ modal.classList.toggle('modal--visible'); }

//  modalBtn.forEach(element => {
//   element.addEventListener('click', switchModal);
//  });
//  closeBtn.addEventListener('click', switchModal);
//  addEventListener("keydown", (event) => {
//   if (event.keyCode == 27 && document.getElementsByClassName("modal--visible").length == 1) 
//     switchModal();
//  });
//  window.onclick = (event) => {
//   if(event.target == modal)
//   switchModal();
//  }
// });
function backToTop(){
  let topBtn = $('.to-top');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50){
      topBtn.fadeIn();
    }
    else{
      topBtn.fadeOut();
    }
  });

  topBtn.on('click', () => {
    $('html').animate({scrollTop: 0}, 1000);
  });
}

$(document).ready(function () {
  var modal = $('.modal'),
  modalBtn =  $('[data-toggle=modal]'),
  closeBtn =  $('[data-toggle=modal__close]');

  // открытие модального окна
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  // закрытие модального окна по кнопке
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  // закрытие модального окна по клику вне его
  $(document).mouseup(function (event){
		if (modal.is(event.target)) {
			modal.toggleClass('modal--visible');
		}
  });
  // закрытие модального окна по клику по клавише Esc
  $(document).keyup(function (event){
		if (event.keyCode == 27 && $('.modal--visible').length ==1) {
			modal.toggleClass('modal--visible');
		}
  });
  // прокрутка в начало экрана
  backToTop();

  let slider1 = new Swiper ('.slider1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  
  });
  
  let slider2 = new Swiper ('.slider2', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  });

  let next = $('.swiper1__next');
  let prev = $('.swiper1__prev');
  let bullets = $('.swiper1__pagination');

  
  bullets.css('left', prev.width() + 25);
  next.css('left', prev.width() + bullets.width() + 50);

  let next1 = $('.swiper2__next');
  let prev1 = $('.swiper2__prev');
  let bullets1 = $('.swiper2__pagination');

  
  bullets1.css('left', prev1.width() + 25);
  next1.css('left', prev1.width() + bullets1.width() + 50);


  var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 6,
    thumbs: {
      swiper: galleryThumbs
    }
  });

});