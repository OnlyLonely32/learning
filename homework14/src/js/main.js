document.addEventListener("DOMContentLoaded", function(event){
 const modal = document.querySelector('.modal');
 const modalBtn = document.querySelectorAll('[data-toggle=modal]');
 const closeBtn = document.querySelector('.modal__close');
 const switchModal = () =>{ modal.classList.toggle('modal--visible'); }

 modalBtn.forEach(element => {
  element.addEventListener('click', switchModal);
 });
 closeBtn.addEventListener('click', switchModal);
 addEventListener("keydown", (event) => {
  if (event.keyCode == 27 && document.getElementsByClassName("modal--visible").length == 1) 
    switchModal();
 });
 window.onclick = (event) => {
  if(event.target == modal)
  switchModal();
 }
});