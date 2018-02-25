import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablesComponent} from './components/tables.component';
import {HomeComponent} from './components/home.component';
import {FertilizationComponent} from './components/fertilization.component';
import {LoginComponent} from './components/login.component';
import {RegisterComponent} from './components/register.component';


const routes: Routes = [
  { path: 'test', component: TablesComponent },
  { path: 'ferti', component: FertilizationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

