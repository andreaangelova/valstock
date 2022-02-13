import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { InfoMessageComponent } from './info-message/info-message.component';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule,
];
const components = [InfoMessageComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
