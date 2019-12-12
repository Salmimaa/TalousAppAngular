import { Genre } from './genre';
import { User } from './user';

export interface Bill {
    id: number;
    summa: number;
    date: Date;
    genre: Genre;
    user: User;
}