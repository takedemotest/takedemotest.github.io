import { Routes } from '@angular/router';
import { AuthGuard } from './global/auth-guard.guard';

export const routes: Routes = [
     {
    path: 'auth',
    loadComponent: () =>
      import('./global/auth-form/auth-layout.component')
        .then(c => c.AuthLayoutComponent),
     children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./global/auth-form/auth-form.component')
            .then(c => c.AuthFormComponent),
        data: { type: 'login' }
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./global/auth-form/auth-form.component')
            .then(c => c.AuthFormComponent),
        data: { type: 'register' }
      },
      {
        path: 'reset',
        loadComponent: () =>
          import('./global/auth-form/auth-form.component')
            .then(c => c.AuthFormComponent),
        data: { type: 'reset' }
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component')
        .then(c => c.DashboardComponent),
        canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];
