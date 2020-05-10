/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
// eslint-disable-next-line import/no-cycle
import App from '../controllers/App';

export default class AppModel {
  constructor(state) {
    this.state = state;
    this.setState = null;
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

  static extractMovieRating(ratingNumbers) {
    return ratingNumbers.map((rating) => rating.imdbRating);
  }

  static exractMovieGalleryLink(data) {
    return data.Search.map((link) => link.imdbID);
  }

  async getMovieInfo() {
    const url = this.state;
    // eslint-disable-next-line prefer-const
    let ratingNumbers = [];
    const data = await await fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

    // const responce = await fetch(url);
    // const data = await responce.json();
    if (data.Response === 'True') {
      const arrRating = data.Search.map((rating) => rating.imdbID);
      const urlRating = arrRating.map(
        (rating) => `https://www.omdbapi.com/?i=${rating}&apikey=b11882b0`
      );

      const rating = urlRating.map(async (n) => {
        const rat = await fetch(n).then((jsonRating) => jsonRating.json());
        ratingNumbers.push(rat);
      });
      await Promise.all(rating).catch('smthwwr');

      return {
        movieTitle: AppModel.extractMovieTitle(data),
        moviePoster: AppModel.extractMoviePoster(data),
        movieYear: AppModel.extractMovieYear(data),
        movieInfo: AppModel.extractMovieRating(ratingNumbers),
        movieLink: AppModel.exractMovieGalleryLink(data),
      };
    }
  }
}
