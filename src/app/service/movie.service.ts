import { Injectable } from '@angular/core';


import { MovieGateway } from '../gateway/movie-gateway';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private movieGateway: MovieGateway) { }

  getMovie(name: string): Promise<any> {
    return this.movieGateway.getMovie(name);
  }

  getSeries(name: string, season: string, episode: string): Promise<any> {
    return this.movieGateway.getSeries(name, season, episode);
  }
}
