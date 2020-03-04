import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../core/interfaces/film.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../core/services/film.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class FilmComponent implements OnInit {
  film: Film;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getFilmById(this.route.snapshot.params.id).subscribe((res: Film) => {
      this.film = res;
    });
  }

  setBgImage(): object {
    return {
      'background-image': `url(${this.film.posterUrl})`
    };
  }

  backToHome(): void {
    this.location.back();
  }
}
