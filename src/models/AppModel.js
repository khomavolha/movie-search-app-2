/* eslint-disable spaced-comment */

import App from '../controllers/App';

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
    console.log(data.Search.map((clip) => clip.Year));
    return data.Search.map((clip) => clip.Year);
  }

  static extractMovieRating(ratingNumbers) {
    return ratingNumbers.map((rating) => rating.imdbRating);
  }

  async getMovieInfo() {
    const url = this.state;
    const responce = await fetch(url);
    const data = await responce.json();

    const arrRating = data.Search.map((rating) => rating.imdbID);
    const urlRating = arrRating.map(
      (rating) => `https://www.omdbapi.com/?i=${rating}&apikey=b11882b0`
    );
    let ratingNumbers = [];
    const rating = urlRating.map(async (n) => {
      const rat = await fetch(n).then((jsonRating) =>
        jsonRating.json().catch((err) => console.log(err))
      );
      ratingNumbers.push(rat);
    });
    await Promise.all(rating);
    console.log(ratingNumbers);

    try {
      JSON.parse(responce);
    } catch {
      console.log('error');
    }
    return {
      movieTitle: AppModel.extractMovieTitle(data),
      moviePoster: AppModel.extractMoviePoster(data),
      movieYear: AppModel.extractMovieYear(data),
      movieInfo: AppModel.extractMovieRating(ratingNumbers),
    };
  }
}
