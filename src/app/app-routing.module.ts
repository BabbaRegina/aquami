import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TablesComponent} from './components/tables.component';
import {HomeComponent} from './components/home.component';


const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

