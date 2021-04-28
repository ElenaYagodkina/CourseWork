document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 376) {
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

function hideScroll() {
    document.body.classList.add('no-scroll');

    scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = -scrollTop + 'px';
}

function showScroll() {
    document.body.classList.remove('no-scroll');

    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scroll(0, scrollTop);
}

document.addEventListener('DOMContentLoaded', function() {

    let modalButtons = document.querySelectorAll('.gallery-slider'),
        modalClose = document.querySelector('.js-modal-close'),
        modalOverlay = document.querySelector('.overlay');
    
    modalButtons.forEach(function(item){
       
       item.addEventListener('click', function(e) {
          
          e.preventDefault();
 
          let modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.gallery__modal[data-modal="' + modalId + '"]');
          
          modalElem.classList.add('active-modal');
          modalOverlay.classList.add('active-modal');
      
          hideScroll();
       });
    });

    document.addEventListener('click', function(e) {
        let modalElem = document.querySelectorAll('.gallery__modal');

		if (e.target == modalOverlay || e.target == modalClose) {
			modalOverlay.classList.remove('active-modal');
			modalElem.forEach(el => {
				el.classList.remove('active-modal');
			});
            showScroll();
		}
	});
 });



 
 
 

 

