import { Component, OnInit } from '@angular/core';

import { Film } from '../../core/interfaces/film.interface';
import { FilmService } from '../../core/services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilms().subscribe((res: Film[]) => {
      this.films = res;
    });
  }

}
