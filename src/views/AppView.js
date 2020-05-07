import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';

export default class AppView {
  constructor(title) {
    this.title = title;
    console.log(title);
  }

  async render() {
    const swiperContainer = document.querySelector('.swiper-container');
    const swiperWrapper = document.querySelector('.swiper-wrapper');

    const movieTitle = this.title.movieTitle.map(
      (title) => `<div class='movieTitle'>${title}</div>`
    );

    const moviePoster = this.title.moviePoster.map(
      (poster) => `<div class='moviePoster'><img src='${poster}'></div>`
    );

    const movieYear = this.title.movieYear.map(
      (year) => `<div class='movieYear'>${year}</div>`
    );

    //сложить все массивы
    const filmsArray = movieTitle.map((value, index) => {
      return value + moviePoster[index] + movieYear[index];
    });
    //console.log(filmsArray);

    swiperWrapper.innerHTML = filmsArray
      .map((content) => `<div class="swiper-slide">${content}</div>`)
      .join('');

    // eslint-disable-next-line no-unused-vars
    const res = await swiperContainer.prepend(swiperWrapper);

    // eslint-disable-next-line no-unused-vars
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      slideClass: 'swiper-slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
