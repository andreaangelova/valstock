import { Item } from './item';

export interface Album {
  name: string;
  dateCreated: Date;
  items: Item[];
}
