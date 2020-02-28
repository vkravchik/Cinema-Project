import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Film } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.url}/films`);
  }
}
