import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import IMovie from "../models/IMovie";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<IMovie>;
  theaterMovies: Array<IMovie>;
  kidsMovies: Array<IMovie>;
  dramaMovies: Array<IMovie>;
  message = null;
  mSub: Subscription

  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.mSub = this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data;
    });

    this.moviesService.getTheaterMovies().subscribe(data => {
      this.theaterMovies = data;
    });

    this.moviesService.getKidsMovies().subscribe(data => {
      this.kidsMovies = data;
    });

    this.moviesService.getDramaMovies().subscribe(data => {
      this.dramaMovies = data;
    });
  }

  ngOnDestroy() {
    this.mSub.unsubscribe();
  }

  fromChild(event) {
    this.message = event;
  }
}
