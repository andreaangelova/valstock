import { Item } from './item.model';

export interface Album {
  name: string;
  dateCreated: Date;
  items: Item[];
}
