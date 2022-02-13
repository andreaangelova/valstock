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
export const removeAlbum = createAction('Remove Album', (payload) => ({
  payload,
}));
