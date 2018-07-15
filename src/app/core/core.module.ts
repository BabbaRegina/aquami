import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {EventService} from './services/event.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './guards/auth.guard.service';

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [AuthenticationService, EventService, AuthGuard],
})
export class CoreModule { }
