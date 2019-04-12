import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, observable } from "rxjs";
import IMovie from "../models/IMovie";
import IMovieDetails from '../models/IMovieDetails';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "&api_key=d44e5db9825ce5bf1fa1acef510fbc7f";
const API_KEY_ALT = "?api_key=d44e5db9825ce5bf1fa1acef510fbc7f";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<IMovie>> {
    return this.http
      .get<Array<IMovie>>(`${BASE_URL}/discover/movie?sort_by=popularity.desc${API_KEY}`)
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getTheaterMovies(): Observable<Array<IMovie>> {
    return this.http
      .get<Array<IMovie>>(
        `${BASE_URL}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2018-10-22${API_KEY}`
      )
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getKidsMovies(): Observable<Array<IMovie>> {
    return this.http
      .get<Array<IMovie>>(
        `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${API_KEY}`
      )
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getDramaMovies(): Observable<Array<IMovie>> {
    return this.http
      .get<Array<IMovie>>(
        `${BASE_URL}/discover/movie?with_genres=18&primary_release_year=2019${API_KEY}`
      )
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getMovies(url: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(url)
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getMovieById(id: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(`${BASE_URL}/movie/${id}${API_KEY_ALT}`)
  }

  searchMovie(query: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`${BASE_URL}/search/movie${API_KEY_ALT}&query=${query}`);
  }
}
