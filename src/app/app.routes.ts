import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: 'login',
    loadComponent: () =>
      import('./auth/auth-form/auth-form.component')
        .then(c => c.AuthFormComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(c => c.DashboardComponent)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
