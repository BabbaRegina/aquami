import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test.component';
import { HomeComponent } from './components/home.component';
import { FertilizationComponent } from './components/fertilization.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { MaintenanceComponent } from './components/maintenance.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'ferti', component: FertilizationComponent },
  { path: 'manutenzione', component: MaintenanceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

