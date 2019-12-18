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
   uniqueNavElements: true,
   pagination: {
     el: '.swiper1__pagination',
     clickable: true
   },
   navigation: {
     nextEl: '.swiper1__next',
     prevEl: '.swiper1__prev',
   }
  });
  
  let slider2 = new Swiper ('.slider2', {
   loop: true,
   uniqueNavElements: true,
   pagination: {
     clickable: true,
     el: '.swiper2__pagination'
   },
   navigation: {
     nextEl: '.swiper2__next',
     prevEl: '.swiper2__prev',
   }
  });

  let next = $('.swiper1__next');
  let prev = $('.swiper1__prev');
  let bullets = $('.swiper1__pagination');
  let container = $('.navigation__container');
  container.css('left', screen.width / 2 ) - ( container / 2 );
  bullets.css('left', prev.width() + 25);
  next.css('left', prev.width() + bullets.width() + 50);

  let next1 = $('.swiper2__next');
  let prev1 = $('.swiper2__prev');
  let bullets1 = $('.swiper2__pagination');
  bullets1.css('left', prev1.width() + 25);
  next1.css('left', prev1.width() + bullets1.width() + 50);
  
  let item;
  let items = document.querySelectorAll('.swiper-slide__rows');

  let changeActive = function (i) {
   console.log(i);
   if (i=== -1) {
    i = items.length - 1;
   } else if (i === items.length){
    i = 0;
   }else
     console.log(i);
    item = items[i];
    console.log(items[i]);
    items.forEach((element) => {
     element.classList.remove('swiper-slide__rows-active');
    })
    item.classList.add('swiper-slide__rows-active');

    slider2.forEach((element) => {
     element.slideTo(i+1);
    });
   
  };

  slider2[0].on('slideChange', () =>{
   changeActive(slider2[0].activeIndex - 1);
  });

  items.forEach((item, i) => {
   item.addEventListener('click', () => {
    changeActive(i);
   });
  });

  new WOW().init();

  $('.modal__form').validate({
   errorClass: "invalid",
   errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
     userName: {
      required: true,
      minlength: 2,
      maxlength: 15
     },
     userPhone: {
      required: true,
      minlength: 18
     },
     userEmail: {
      required: true,
      email: true
     }
    },
    messages: {
     userName: {
      required: "Обязательзо введите ваше имя!",
      maxlength: "Имя слишком длинное!",
      minlength: jQuery.validator.format("Имя должно состоять как минимум из {0} букв!"),
     },
     userPhone: {
      required: "Обязательзо введите ваш телефон!",
      minlength: "Введите телефон полностью!",
     }, 
     userEmail: {
      required: "Обязательзо введите ваш Email!",
      email: "Ваш email должен иметь формат name@domain.com"
     }
    }
  });

  $('.footer__form').validate({
   errorClass: "invalid",
   errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
     userName: {
      required: true,
      minlength: 2,
      maxlength: 15
     },
     userPhone: {
      required: true,
      minlength: 18
     },
     userText: {
      required: true,
      minlength: 10
     }
    },
    messages: {
     userName: {
      required: "Обязательзо введите ваше имя!",
      minlength: jQuery.validator.format("Имя должно состоять как минимум из {0} букв!"),
      maxlength: "Имя слишком длинное!",
     },
     userPhone: {
      required: "Обязательзо введите ваш телефон!",
      minlength: "Введите телефон полностью!",
     }, 
     userText: {
      required: "Обязательзо введите сообщение!",
      minlength: jQuery.validator.format("Имя должно состоять как минимум из {0} букв!"),
     }
    }
  });

  $('.control__form').validate({
   errorClass: "invalid",
   errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
     userName: {
      required: true,
      minlength: 2,
      maxlength: 15
     },
     userPhone: {
      required: true,
      minlength: 18
     }
    },
    messages: {
     userName: {
      required: "Обязательзо введите ваше имя!",
      maxlength: "Имя слишком длинное!",
      minlength: jQuery.validator.format("Имя должно состоять как минимум из {0} букв!"),
     },
     userPhone: {
      required: "Обязательзо введите ваш телефон!",
      minlength: "Введите телефон полностью!",
     }
    }
  });

  // маска для телфона
  $('[type=tel]').mask('+7 (000) 00-00-000');
  
  $(window).scroll( () => {
   let atop= document.querySelector('.control__section-title__heading');
   if ( $(this).scrollTop() >=$('.control__section-title__heading').offset().top-document.documentElement.clientHeight)
   {atop.classList.add('anima');}
   atop = document.querySelector('.types__section-title__heading');
   if ( $(this).scrollTop() >=$('.types__section-title__heading').offset().top-document.documentElement.clientHeight)
   {atop.classList.add('anima');}
   atop = document.querySelector('.design__section-title__heading');
   if ( $(this).scrollTop() >=$('.design__section-title__heading').offset().top-document.documentElement.clientHeight)
   {atop.classList.add('anima');}
   // atop = document.querySelector('.hero__title');
   // if ( $(this).scrollTop() >=$('.hero__title').offset().top-document.documentElement.clientHeight)
   // {atop.classList.add('animaleft');}
   }
   
   );
});