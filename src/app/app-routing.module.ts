import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test.component';
import { HomeComponent } from './components/home.component';
import { FertilizationComponent } from './components/fertilization.component';
import { LoginComponent } from './components/login.component';
import { MaintenanceComponent } from './components/maintenance.component';
import { AuthGuard } from './shared/guards/auth.guard.service';

const routes: Routes = [
  { path: 'test', component: TestComponent , canActivate: [AuthGuard] },
  { path: 'ferti', component: FertilizationComponent , canActivate: [AuthGuard] },
  { path: 'manutenzione', component: MaintenanceComponent , canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
