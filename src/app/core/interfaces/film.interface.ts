import { Genre } from './genre.interface';

export interface Film {
  _id: string;
  name: string;
  description: string;
  genresId: Genre[];
  posterUrl: string;
}
