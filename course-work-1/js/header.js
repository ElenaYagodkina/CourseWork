var burger = "";
document.addEventListener("DOMContentLoaded", function() {
  burger = document.getElementById('burger')
  burger.onclick = toggleBurger
});
function toggleBurger() {
  if(burger.classList.contains("active")){
    burger.classList.remove("active");
  }else{
    burger.classList += " active";
  }
}


document.querySelector('.burger').addEventListener('click', function () {
  const div = document.querySelector('.header__menu')
  div.classList.toggle('show');
});


const btn = document.querySelectorAll('.header__style');
const drop = document.querySelectorAll('.header__list-btn')

btn.forEach((selectedbtn) => 
  selectedbtn.onclick = function(){
    drop.forEach(el => {el.classList.remove(('menu-active'))})
    this.parentElement.classList.toggle('menu-active');
})

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header__style') 
    && !e.target.classList.contains('header__simplebar-content')) {
      drop.forEach(el => {el.classList.remove(('menu-active'))})
    }
});

