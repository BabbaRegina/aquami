import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard.service';

const routes: Routes = [
  { path: 'aquaMI', loadChildren: 'app/features/features.module#FeaturesModule', canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'aquaMI', pathMatch: 'full' },
  { path: '**', redirectTo: 'aquaMI', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
