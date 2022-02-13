import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// extend this module with the additional log in features: eg. register, reset password...
const components = [LoginComponent];
@NgModule({
  declarations: components,
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  exports: components,
})
export class LoginModule {}
