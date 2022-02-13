import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { albumReducer } from './store/album.reducer';
import { AppStore } from './models/store.model';

export const store: ActionReducerMap<AppStore> = { albums: albumReducer };

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, StoreModule.forRoot(store)],
})
export class CoreModule {}
