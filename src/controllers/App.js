import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.omdbapi.com/?s=dream&page=2&apikey=b11882b0',
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getClipNames();
    const view = new AppView(data);

    view.render();
  }
}
