import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../core/guards/auth.guard.service';
import {FertilizationComponent} from './components/fertilization.component';
import {MaintenanceComponent} from './components/maintenance.component';
import {TestComponent} from './components/test.component';
import {HomeComponent} from './components/home.component';

const routes: Routes = [
  { path: 'test', component: TestComponent},
  { path: 'ferti', component: FertilizationComponent},
  { path: 'manutenzione', component: MaintenanceComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
