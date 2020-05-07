/* eslint-disable spaced-comment */

export default class AppModel {
  constructor(state) {
    this.state = state;
    //this.pageToken = '';
  }

  static extractMovieTitle(data) {
    return data.Search.map((clip) => clip.Title);
  }

  static extractMoviePoster(data) {
    return data.Search.map((clip) => clip.Poster);
  }

  static extractMovieYear(data) {
    return data.Search.map((clip) => clip.Year);
  }

  async getMovieInfo() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();

    return {
      movieTitle: AppModel.extractMovieTitle(data),
      moviePoster: AppModel.extractMoviePoster(data),
      movieYear: AppModel.extractMovieYear(data),
    };
  }
}
