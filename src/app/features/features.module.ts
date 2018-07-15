import { NgModule } from '@angular/core';

import { FeaturesRoutingModule } from './features-routing.module';
import {EventDetailComponent} from './components/event-detail.component';
import {FertilizationComponent} from './components/fertilization.component';
import {HomeComponent} from './components/home.component';
import {MaintenanceComponent} from './components/maintenance.component';
import {TestComponent} from './components/test.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FeaturesRoutingModule
  ],
  declarations: [EventDetailComponent, FertilizationComponent, HomeComponent, MaintenanceComponent, TestComponent]
})
export class FeaturesModule { }
