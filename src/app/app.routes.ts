import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.guard';

export const routes: Routes = [
     {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth-form/auth-form.component')
        .then(c => c.AuthFormComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(c => c.DashboardComponent),
        canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' }
];
