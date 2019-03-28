import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IMovie from '../models/IMovie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=d44e5db9825ce5bf1fa1acef510fbc7f';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${BASE_URL}/movie/popular${API_KEY}`);
  }

  getTheaterMovies(): Observable<Array<IMovie>> {
    return this.http.get<Array<IMovie>>(`${BASE_URL}/discover/movie${API_KEY}&with_release_type=2|3`);
  }
}
