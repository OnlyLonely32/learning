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
  var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  })

  var next = $('.swiper-button-next')
  var prev = $('.swiper-button-prev')
  var bullets = $('.swiper-pagination')

  
  bullets.css('left', prev.width() + 25);
  next.css('left', prev.width() + bullets.width() + 50);

});