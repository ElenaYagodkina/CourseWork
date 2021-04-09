document.addEventListener('DOMContentLoaded', function () {
    if (document.documentElement.clientWidth < 700) {
        document.querySelector('.contacts__heading').after(document.querySelector('.contacts__address'));
        document.querySelector('.contacts__heading').after(document.querySelector('.contacts__name'));
        document.querySelector('.slider2').after(document.querySelector('.gallery-slider-button'));
        editAccAdapt();
    }

    if (document.documentElement.clientWidth < 1900) {
        document.querySelector('.header__logo').after(document.querySelector('.header__form-search'));
        document.querySelector('.header__content-first').after(document.querySelector('.header__menu'));
    }

    if (document.documentElement.clientWidth >= 1900) {
        document.querySelector('.header__navigation').after(document.querySelector('.header__form-search'));
        document.querySelector('.header__logo').after(document.querySelector('.header__menu'));
    }

});


let oldWidth = window.innerWidth;
window.onresize = function () {
    let newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        oldWidth = newWidth;

        if (document.documentElement.clientWidth < 700) {
            document.querySelector('.contacts__heading').after(document.querySelector('.contacts__address'));
            document.querySelector('.contacts__heading').after(document.querySelector('.contacts__name'));
            document.querySelector('.slider2').after(document.querySelector('.gallery-slider-button'));
        }
        
        if (document.documentElement.clientWidth < 1900) {
            document.querySelector('.header__logo').after(document.querySelector('.header__form-search'));
            document.querySelector('.header__content-first').after(document.querySelector('.header__menu'));
        }

        if (document.documentElement.clientWidth >= 1900) {
            document.querySelector('.header__navigation').after(document.querySelector('.header__form-search'));
            document.querySelector('.header__logo').after(document.querySelector('.header__menu'));
        }

    }
};
