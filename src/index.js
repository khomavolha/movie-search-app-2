import './styles/style.css';
import App from './controllers/App';
import './controllers/clicked';

const url = 'https://www.omdbapi.com/?s=dream&page=1&apikey=b11882b0';
const app = new App(url);
app.start();
