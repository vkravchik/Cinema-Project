import { Genre } from './genre.interface';
import { DecimalPipe } from '@angular/common';

export interface Film {
  _id: string;
  name: string;
  description: string;
  photoUrl: string;
  photoId: string;
  posterUrl: string;
  posterId: string;
  year: number;
  duration: number;
  rating: number;
  genresId: Genre[];
}
