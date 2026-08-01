import { Routes } from '@angular/router';
import { AuthGuard } from './global/auth-guard.guard';
import { MainLayoutComponent } from './mainLayout/main-layout/main-layout.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./global/auth-form/auth-layout.component').then(
        (c) => c.AuthLayoutComponent,
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./global/auth-form/auth-form.component').then(
            (c) => c.AuthFormComponent,
          ),
        data: { type: 'login' },
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./global/auth-form/auth-form.component').then(
            (c) => c.AuthFormComponent,
          ),
        data: { type: 'register' },
      },
      {
        path: 'reset',
        loadComponent: () =>
          import('./global/auth-form/auth-form.component').then(
            (c) => c.AuthFormComponent,
          ),
        data: { type: 'reset' },
      },
    ],
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
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
      {
        path: 'fields',
        loadComponent: () =>
          loadRemoteModule('farmOperations', './fieldsModule').then(
            (m) => m.FieldsComponent,
          ),
      },
       {
        path: 'crops',
        loadComponent: () =>
          loadRemoteModule('farmOperations', './cropModule').then(
            (m) => m.CropComponent,
          ),
      },
      {
        path: 'expenseRevenue',
        loadComponent: () =>
          loadRemoteModule('expenseRevenue', './expenseRevenueModule').then(
            (m) => m.ExpenseRevenueComponent,
          ),
      },
    ],
  },

];
