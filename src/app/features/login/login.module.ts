import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

// extend this module with the additional log in features: eg. register, reset password...
const components = [LoginComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoginRoutingModule],
  exports: components,
})
export class LoginModule {}
