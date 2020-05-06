import './styles/style.css';
import Swiper from 'swiper';
import '../node_modules/swiper/css/swiper.css';

import App from './controllers/App';

const app = new App();

app.start();

// const buttonElement = document.querySelector('#search');
// const inputElement = document.querySelector('#inputArea');

// buttonElement.onclick = function even(event) {
//   event.preventDefault();
//   const { value } = inputElement;
//   console.log('Value', value);

//   getMovieTitle(value);
// };

const mySwiper = new Swiper('.swiper-container', {
  loop: true,


  slidesPerView: 3,
  spaceBetween: 30,
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
