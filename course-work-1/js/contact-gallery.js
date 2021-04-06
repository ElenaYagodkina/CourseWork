document.addEventListener('DOMContentLoaded', function () {

if (document.documentElement.clientWidth < 700) {
    document.querySelector('.contacts__heading').after(document.querySelector('.contacts__address'));
    document.querySelector('.contacts__heading').after(document.querySelector('.contacts__name'));
    document.querySelector('.gallery__heading').after(document.querySelector('.gallery-slider-button'));
    editAccAdapt();
}
if (document.documentElement.clientWidth < 1900) {
    document.querySelector('.header__logo').after(document.querySelector('.header__form-search'));
}

});