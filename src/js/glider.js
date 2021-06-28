import Glider from 'glider-js';

window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider__slides-wrapper'), {
    slidesToShow: 1,
    scrollLock: true,
    dots: '.glider__dots',
    draggable: true,
    arrows: {
      prev: '.glider__button_type_prev',
      next: '.glider__button_type_next',
    },
  });
});
