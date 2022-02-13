import { createReducer, on } from '@ngrx/store';
import { Album } from '../models';
import { createAlbum } from './album.actions';

export const albumFeatureKey = 'album';

export const initialState: Album[] = [];

export const albumReducer = createReducer(
  initialState,
  on(createAlbum, (state, action) => {
    let dateCreated = new Date();
    return [...state, { name: action.payload, dateCreated, items: [] }];
  })
);
