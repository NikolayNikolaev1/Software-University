import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import IMovieDetails from 'src/app/models/IMovieDetails';
import { MovieService } from '../movie.service';

@Injectable()
export class SingleMovieResolver implements Resolve<IMovieDetails> {
    constructor(private moviesService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];

        return this.moviesService.getMovieById(id);
    }
}