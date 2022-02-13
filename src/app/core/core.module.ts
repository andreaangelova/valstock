import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { albumReducer } from './store/album.reducer';
import { AppStore } from './models';
import { NavComponent } from './nav/nav.component';

export const store: ActionReducerMap<AppStore> = { albums: albumReducer };

const components = [NavComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, HttpClientModule, StoreModule.forRoot(store)],
  exports: components,
})
export class CoreModule {}
