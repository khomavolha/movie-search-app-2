/* eslint-disable spaced-comment */
export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data) {
    return data.Search.map((clip) => clip.Title);
  }

  async getClipNames() {
    const { url } = this.state;
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(AppModel.extractClipNames(data));

    // fetch(url)
    //   .then((res) => res.json())
    //   // eslint-disable-next-line no-console
    //   .then((res) => console.log(res.Search[2].Title));

    return AppModel.extractClipNames(data);
  }
}
