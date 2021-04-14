const slider1 = document.querySelector('.hero-swiper');
const slider2 = document.querySelector('.gallery-swiper');
const slider3 = document.querySelector('.events-swiper');
const slider4 = document.querySelector('.publications-swiper');
const slider5 = document.querySelector('.project-swiper');

let width = window.innerWidth;

// slider hero

let mySwiper = new Swiper(slider1, {
    slidesPerView: 1,

   autoplay: {
     delay: 10000,
     disableOnInteraction: false,
    },

    effect: 'fade',
});

if ( width >= 1025) {
  mySwiper.prependSlide([
    '<div class="swiper-slide hero-slider" style="background: url(./img/birmingham-museums3.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/birmingham-museums2.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/birmingham-museums.jpg) no-repeat;"></div>']);
  mySwiper.removeSlide([3,4,5]);
  mySwiper.slideTo(0,0,false);
}

if ( width >= 768 && width < 1025) {
  mySwiper.prependSlide([
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham1024-3.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham1024-2.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham1024-1.jpg) no-repeat;"></div>']);
  mySwiper.removeSlide([3,4,5]);
  mySwiper.slideTo(0,0,false);
}

if ( width > 320 && width < 768) {
  mySwiper.prependSlide([
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham768-3.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham768-2.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham768-1.jpg) no-repeat;"></div>']);
  mySwiper.removeSlide([3,4,5]);
  mySwiper.slideTo(0,0,false);
}

if ( width <= 320) {
  mySwiper.prependSlide([
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham320-3.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham320-2.jpg) no-repeat;"></div>',
    '<div class="swiper-slide hero-slider" style="background: url(./img/brimingham320-1.jpg) no-repeat;"></div>']);
  mySwiper.removeSlide([3,4,5]);
  mySwiper.slideTo(0,0,false);
}

  

  // slider gallery

let mySwiper1 = new Swiper(slider2, {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
    disabledClass: 'gallery-button-disabled',
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev'
  },

  updateOnWindowResize: true,
  observer: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 12,
      updateOnWindowResize: true
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      updateOnWindowResize: true
    },
    // when window width is >= 1920px
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      updateOnWindowResize: true
    }
  }   
});



// slider events
let mySwiper3;

function mobileSlider() {
	if (width <= 767 && slider3.dataset.mobile == 'false') {
		mySwiper3 = new Swiper(slider3, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'events__card',

      pagination: {
        el: '.events-pagination',
        clickable: true
      },
		});

		slider3.dataset.mobile = 'true';
	}

	if (width >= 768) {
		slider3.dataset.mobile == 'false';
		if (slider3.classList.contains('swiper-container-initialized')) {
			mySwiper3.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});



// slider publications

let mySwiper4 = function () {
	if (width >= 768) {
		let swiper4 = new Swiper(slider4, {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      slidesPerColumnFill: 'row',
      updateOnWindowResize: true, 

			breakpoints: {

        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 49,
          slidesPerColumnFill: 'row',
          updateOnWindowResize: true
        },

        // when window width is >= 1920px
        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
          slidesPerColumnFill: 'row',
          updateOnWindowResize: true
        },
      }, 

        pagination: {
          el: '.publications__swiper-pagination',
          type: 'fraction'
        },

        navigation: {
          nextEl: '.publications-button-next',
          prevEl: '.publications-button-prev',
          disabledClass: 'publications-button-disabled',
          nextEl: '.publications-button-next',
          prevEl: '.publications-button-prev'

        },

		});

		swiper4.on('resize', function () {
			if (width <= 767) {
				swiper4.destroy();
			}
		});
	}
}

window.addEventListener('resize', () => {
	mySwiper4();
})

mySwiper4();



// slider project

let mySwiper5 = new Swiper(slider5, {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  navigation: {
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev',
    disabledClass: 'partners-button-disabled',
    nextEl: '.partners-button-next',
    prevEl: '.partners-button-prev'

  },
  
  updateOnWindowResize: true,
  observer: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 12,
      updateOnWindowResize: true
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      updateOnWindowResize: true,
    },

    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
      updateOnWindowResize: true
    },

    // when window width is >= 1920px
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      updateOnWindowResize: true
    }
  }   
});



// events показать карточки 

document.querySelector('.toggler-btn').addEventListener('click', function () {
  this.style.cssText = 'display: none';
  document.querySelector('.slider3').style.cssText = 'flex-wrap: wrap;';
});