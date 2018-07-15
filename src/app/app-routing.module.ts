import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard.service';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/features/features.module#FeaturesModule', canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
