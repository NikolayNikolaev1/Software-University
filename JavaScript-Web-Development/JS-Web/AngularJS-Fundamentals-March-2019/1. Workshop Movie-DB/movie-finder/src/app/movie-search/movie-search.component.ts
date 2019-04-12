import { Component, OnInit } from '@angular/core';
import IMovie from '../models/IMovie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchedMovies: IMovie[];
  query: string;

  constructor(
    private moviesServie: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const query = this.route.snapshot.queryParams['search'];
    this.route.queryParams.subscribe((params: Params) => {
      this.query = params['search'];
      this.moviesServie.searchMovie(this.query)
        .subscribe((data) => {
          this.searchedMovies = data['results'];
        });
    });
  }
}
