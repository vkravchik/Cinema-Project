import { Genre } from './genre.interface';

export interface Film {
  _id: string;
  name: string;
  description: string;
  genresId: Genre[];
  photoUrl: string;
  photoId: string;
  posterUrl: string;
  posterId: string;
}
