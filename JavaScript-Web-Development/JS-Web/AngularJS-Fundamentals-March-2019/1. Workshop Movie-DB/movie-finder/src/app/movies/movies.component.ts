import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import IMovie from '../models/IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<IMovie>;
  theaterMovies: Array<IMovie>;
  message = null;

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0, 6);
    });

    this.moviesService.getTheaterMovies().subscribe(data => {
      this.theaterMovies = data['results'].slice(6, 12);
    });
  }

  fromChild(event) {
    this.message = event;
  }
}
