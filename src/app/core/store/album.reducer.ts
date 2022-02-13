import { createReducer, on } from '@ngrx/store';
import { Album } from '../models';
import { addItemToAlbums, createAlbum } from './album.actions';

export const albumFeatureKey = 'album';

export const initialState: Album[] = [];

export const albumReducer = createReducer(
  initialState,
  on(createAlbum, (state, action) => {
    let name = action.payload.name;
    let dateCreated = new Date();
    let selectedItem = action.payload.selectedItem;
    return [...state, { name, dateCreated, items: [selectedItem] }];
  }),
  on(addItemToAlbums, (state, action) => {
    let selectedAlbums = action.payload.selectedAlbums;
    let selectedItem = action.payload.selectedItem;
    // TODO: implement clone deep
    let stateTemp = JSON.parse(JSON.stringify(state));

    let newState = stateTemp.map((album: Album) => {
      if (selectedAlbums.find((x: Album) => x.name === album.name))
        album.items.push(selectedItem);
      return album;
    });
    return newState;
  })
);
