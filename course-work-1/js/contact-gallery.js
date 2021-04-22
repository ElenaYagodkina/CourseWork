document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 321) {
        document.querySelector('.slider2').after(document.querySelector('.gallery-slider-button'));
        editAccAdapt();
    }

    if (window.innerWidth < 768) {
        document.querySelector('.contacts__heading').after(document.querySelector('.contacts__address'));
        document.querySelector('.contacts__heading').after(document.querySelector('.contacts__name'));
    }

    if (window.innerWidth < 1025) {
        document.querySelector('.header__logo').after(document.querySelector('.header__form-search'));
        document.querySelector('.header__content-first').after(document.querySelector('.header__menu'));
    }

    if (window.innerWidth >= 1025) {
        document.querySelector('.header__navigation').after(document.querySelector('.header__form-search'));
        document.querySelector('.header__logo').after(document.querySelector('.header__menu'));
    }

});


let oldWidth = window.innerWidth;
window.onresize = function () {
    let newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        oldWidth = newWidth;

        if (window.innerWidth < 768) {
            document.querySelector('.contacts__heading').after(document.querySelector('.contacts__address'));
            document.querySelector('.contacts__heading').after(document.querySelector('.contacts__name'));
            document.querySelector('.slider2').after(document.querySelector('.gallery-slider-button'));
        }
        
        if (window.innerWidth < 1025) {
            document.querySelector('.header__logo').after(document.querySelector('.header__form-search'));
            document.querySelector('.header__content-first').after(document.querySelector('.header__menu'));
        }

        if (window.innerWidth >= 1025) {
            document.querySelector('.header__navigation').after(document.querySelector('.header__form-search'));
            document.querySelector('.header__logo').after(document.querySelector('.header__menu'));
        }

    }
};
