import { createAction } from '@ngrx/store';

export const createAlbum = createAction('Create Album', (payload) => ({
  payload,
}));
export const addItemToAlbums = createAction(
  'Add Items to Albums',
  (payload) => ({
    payload,
  })
);
export const removeItemFromAlbum = createAction('Remove Item From Album', (payload) => ({
  payload,
}));
