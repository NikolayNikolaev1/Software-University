import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import IMovie from '../models/IMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: IMovie;

  @Output()
  clickButtonEmitter = new EventEmitter();

  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  clickButton() {
    this.clickButtonEmitter.emit(this.movie.id.toString());
  }

}
