import './styles/style.css';
import App from './controllers/App';

document.body.onload = function preLoader() {
  setTimeout(() => {
    const preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('closePreloader')) {
      document.body.style.visibility = 'visible';
      preloader.classList.add('closePreloader');
    }
  }, 1000);
};

const url = 'https://www.omdbapi.com/?s=dream&page=1&apikey=b11882b0';
const app = new App(url);
app.start();
