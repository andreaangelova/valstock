import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

// extend this module with the additional log in features: eg. register, reset password...
const components = [LoginComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class LoginModule {}
