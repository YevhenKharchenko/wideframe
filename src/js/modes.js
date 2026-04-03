import Swiper from 'swiper';
import 'swiper/css/bundle';

const modesLeftArrow = document.getElementById('modesLeftArrow');
const modesRightArrow = document.getElementById('modesRightArrow');
const modesDots = document.querySelectorAll('.modes-dot');

let modesSwiper;

modesSwiper = new Swiper('.modes-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 32,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },
  },
  on: {
    init: () => {
      document.querySelector('.modes-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateModesArrows(this);
    },
  },
});

function updateModesArrows(swiper) {
  modesLeftArrow.disabled = swiper.isBeginning;
  modesRightArrow.disabled = swiper.isEnd;
}

modesLeftArrow.addEventListener('click', () => {
  modesSwiper.slidePrev();
});

modesRightArrow.addEventListener('click', () => {
  modesSwiper.slideNext();
});
