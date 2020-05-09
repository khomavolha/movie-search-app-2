import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';

export default class AppView {
  constructor(title) {
    this.title = title;
    console.log(this.title);
  }

  async render() {
    const swiperContainer = document.querySelector('.swiper-container');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (this.title !== undefined) {
      // console.log(this.title === undefined);
      const movieTitle = this.title.movieTitle.map(
        (title) => `<div class='movieTitle'>${title}</div>`
      );

      this.title.moviePoster.forEach((item, i) => {
        if (item === 'N/A') {
          this.title.moviePoster[i] = '../src/assets/no_poster.png';
        }
      });

      const moviePoster = this.title.moviePoster.map(
        (poster) => `<div class='moviePoster'><img src='${poster}'></div>`
      );

      const movieYear = this.title.movieYear.map(
        (year) => `<div class='movieYear'>${year}</div>`
      );

      const movieRating = this.title.movieInfo.map(
        (rating) =>
          `<div class='movieRating'><span id='starsRating'>&#9733;</span>${rating}</div>`
      );

      const filmsArray = movieTitle.map((value, index) => {
        return (
          value + moviePoster[index] + movieYear[index] + movieRating[index]
        );
      });

      swiperWrapper.innerHTML = filmsArray
        .map((content) => `<div class="swiper-slide">${content}</div>`)
        .join('');

      // eslint-disable-next-line no-unused-vars
      const res = await swiperContainer.prepend(swiperWrapper);
    }
    if (this.title === undefined) {
      const resultInput = document.querySelector('.resultInput');
      resultInput.innerHTML = 'Sorry, I have no idea what you want';
      console.log('never');
    }
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
