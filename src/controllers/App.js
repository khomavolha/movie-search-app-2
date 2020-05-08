import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor(state) {
    this.state = state;
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getMovieInfo();
    const view = new AppView(data);
    view.render();
  }
}

const button = document.querySelector('#search');
const textField = document.querySelector('#inputArea');
button.onclick = (event) => {
  event.preventDefault();
  const val = textField.value;
  if (val) {
    const url = `https://www.omdbapi.com/?s=${val}&page=1&apikey=b11882b0`;
    const app = new App(url);
    app.start();
  }
  textField.value = '';
};
