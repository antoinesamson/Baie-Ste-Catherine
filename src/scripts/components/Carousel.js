import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };
    this.init();
  }

  init() {
    console.log('initialisation de ma composante Carousel');
    this.setOptions();
    const swiper = new Swiper(this.element, this.options, {});
  }

  setOptions() {}
}
