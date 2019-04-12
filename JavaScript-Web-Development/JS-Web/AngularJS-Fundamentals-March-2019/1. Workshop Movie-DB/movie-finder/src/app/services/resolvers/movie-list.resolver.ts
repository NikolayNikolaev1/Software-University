import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieService } from '../movie.service';
import IMovie from 'src/app/models/IMovie';
import { merge } from 'rxjs';

@Injectable()
export class MovieListResolver implements Resolve<IMovie[]> {
    constructor(private moviesService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return merge(
            this.moviesService.getTheaterMovies(),
            this.moviesService.getDramaMovies(),
            this.moviesService.getKidsMovies(),
            this.moviesService.getPopularMovies()
        );
    }
}