import { createAction } from '@ngrx/store';

export const createAlbum = createAction('Create Album', (payload) => ({
  payload,
}));
export const removeAlbum = createAction('Remove Album', (payload) => ({
  payload,
}));
