import { Component, Input, OnInit } from '@angular/core';

import { Film } from '../../core/interfaces/film.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
