import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { AlbumPopupComponent } from './album-popup/album-popup.component';

@NgModule({
  declarations: [AlbumComponent, AlbumPopupComponent],
  imports: [CommonModule, AlbumRoutingModule],
})
export class AlbumModule {}
