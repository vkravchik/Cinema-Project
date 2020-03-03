import { Component, Input, OnInit } from '@angular/core';

import { Film } from '../../core/interfaces/film.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() film: Film;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openFilmDetail(film): void {
    this.router.navigate([`/film/${film._id}`]);
  }

}
