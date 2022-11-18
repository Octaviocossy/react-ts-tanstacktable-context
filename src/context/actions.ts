import { Person } from '../models';

export type Actions =
  | { type: 'getPeople'; payload: Person[] }
  | { type: ''; payload: null };
