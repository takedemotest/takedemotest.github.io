import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { routes } from './app.routes';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { authReducer } from './auth/store/auth.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { MockBackendInterceptor } from './mock/mock-backend.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // ✅ HttpClient
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ NgRx Store (ONLY ONCE)
    provideStore({
      auth: authReducer
    }),

    // ✅ NgRx Effects (ONLY ONCE)
    provideEffects([AuthEffects]),

    // ✅ Router
    provideRouter(routes),

    // ✅ Zone optimization
    provideZoneChangeDetection({ eventCoalescing: true }),

    // ✅ Mock backend
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockBackendInterceptor,
      multi: true
    }
  ]
};
