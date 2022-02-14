import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSpinnerModule } from 'ngx-spinner';

import { InfoMessageComponent } from './components/info-message/info-message.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule,
  NgxSpinnerModule,
];
const components = [InfoMessageComponent, SpinnerComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
