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
    console.log(e.target);

  if (!e.target.classList.contains('header__search-input') 
      && !e.target.classList.contains('search-lupe')) {
        document.querySelector('.header__form-search').classList.remove('active-search');
        document.querySelector('.burger').classList.remove('active-search');
        document.querySelector('.search-close').classList.remove('active-search');
        document.querySelector('.header__logo').classList.remove('active-search');
        document.querySelector('.header__search-input').classList.remove('active-search');
      }

});

document.querySelector('.header__form-search').addEventListener('click', function(){
    document.querySelector('.header__form-search').classList.add('active-search');
    document.querySelector('.burger').classList.add('active-search');
    document.querySelector('.search-close').classList.add('active-search');
    document.querySelector('.header__logo').classList.add('active-search');
    document.querySelector('.header__search-input').classList.add('active-search');
})









