import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './components/login.component';
import {RegisterComponent} from './components/register.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
