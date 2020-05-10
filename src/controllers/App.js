// eslint-disable-next-line import/no-cycle
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
const cross = document.querySelector('.cross');
const resultInput = document.querySelector('.resultInput');
async function translate(value) {
  const translator = await fetch(
    `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200509T175233Z.754eaad9df40dcb8.9a71504906a9c4cdc3d711f5687923540005d3ef&text=${value}&lang=ru-en`
  );
  const res = await translator.json();
  const resText = res.text;
  return resText;
}
button.onclick = async (event) => {
  event.preventDefault();
  const val = textField.value;
  const unit = await translate(val);
  if (unit) {
    const number = 1;
    const url = `https://www.omdbapi.com/?s=${unit}&page=${number}&apikey=b11882b0`;
    const app = new App(url);
    app.start();
  }
  if (unit === undefined) {
    resultInput.innerHTML = "What do you mean? I don't understand!";
  } else {
    resultInput.innerHTML = `Results for "${unit}"`;
  }
};

cross.onclick = (e) => {
  e.preventDefault();
  textField.value = '';
};
