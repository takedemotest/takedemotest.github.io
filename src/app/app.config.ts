import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HTTP_INTERCEPTORS,provideHttpClient,withInterceptorsFromDi} from '@angular/common/http';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './global/store/auth/auth.reducer';
import { AuthEffects } from './global/store/auth/auth.effects';
import { DashboardEffects } from './global/store/dashboard/dashboard.effects';
import { dashboardState } from './global/store/dashboard/dashboard.reducer';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),

    provideCharts(withDefaultRegisterables()),

    provideStore({
      auth: authReducer,
      dashboard:dashboardState
    }),

    provideEffects([AuthEffects, DashboardEffects]),

    provideRouter(routes),

    provideZoneChangeDetection({ eventCoalescing: true }),

  ]
};
