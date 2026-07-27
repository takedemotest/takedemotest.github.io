import { Routes } from '@angular/router';
import { AuthGuard } from './global/auth-guard.guard';
import { MainLayoutComponent } from './mainLayout/main-layout/main-layout.component';

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
    path: '',
    component: MainLayoutComponent,
    // canActivate: [AuthGuard]
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
    ]
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];
