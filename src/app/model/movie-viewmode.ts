import { RatingViewModel } from '../model/rating-viewmodel';

export class MovieViewModel {
    title = '';
    year = '';
    rated = '';
    released = '';
    runtime = '';
    genre = '';
    director = '';
    writer = '';
    actors = '';
    plot = '';
    language = '';
    country = '';
    awards = '';
    poster = '';
    rating = Array<RatingViewModel>();
}
