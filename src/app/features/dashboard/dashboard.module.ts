import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ItemComponent } from './item/item.component';
import { AlbumPopupComponent } from './album-popup/album-popup.component';

@NgModule({
  declarations: [DashboardComponent, ItemComponent, AlbumPopupComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
