import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablesComponent} from './components/tables.component';
import {HomeComponent} from './components/home.component';
import {FertilizationComponent} from './components/fertilization.component';


const routes: Routes = [
  { path: 'test', component: TablesComponent },
  { path: 'ferti', component: FertilizationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

