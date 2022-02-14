import { createReducer, on } from '@ngrx/store';
import { Album, Item } from '../models';
import {
  addItemToAlbums,
  createAlbum,
  removeItemFromAlbum,
} from './album.actions';

export const albumFeatureKey = 'album';

export const initialState: Album[] = [];

export const albumReducer = createReducer(
  initialState,
  on(createAlbum, (state, action) => {
    let name = action.payload.name;
    let dateCreated = new Date();
    let selectedItem = { ...action.payload.selectedItem };
    
    return [...state, { name, dateCreated, items: [selectedItem] }];
  }),

  on(addItemToAlbums, (state, action) => {
    let selectedAlbums = action.payload.selectedAlbums;
    let selectedItem = { ...action.payload.selectedItem };
    // TODO: implement clone deep
    let stateTemp = JSON.parse(JSON.stringify(state));

    let newState = stateTemp.map((album: Album) => {
      let selected = selectedAlbums.find((x: Album) => x.name === album.name);
      // check if item already exist in album
      if (
        selected &&
        !selected.items.find((item: any) => item.id === selectedItem.id)
      )
        album.items.push(selectedItem);
      return album;
    });
    return newState;
  }),

  on(removeItemFromAlbum, (state, action) => {
    let albumId = action.payload.albumId;
    let itemId = action.payload.itemId;
    let stateTemp = JSON.parse(JSON.stringify(state));
    let selectedAlbum = stateTemp[albumId];

    selectedAlbum.items = selectedAlbum.items.filter(
      (item: Item) => item.id !== itemId
    );
    return stateTemp;
  })
);
