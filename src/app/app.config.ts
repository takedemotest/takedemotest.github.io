import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
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
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from './core/services/icon.service';
import { animalReducer } from './global/store/animal/animal.reducer';
import { AnimalEffects } from './global/store/animal/animal.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),

    provideCharts(withDefaultRegisterables()),

    provideStore({
      auth: authReducer,
      dashboard:dashboardState,
      animals:animalReducer
    }),

    provideEffects([AuthEffects, DashboardEffects, AnimalEffects]),

    provideRouter(routes),

    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(MatIconModule),
    {
      provide: APP_INITIALIZER,
     useFactory: (iconService: IconService) => () => iconService.registerIcons(),
  deps: [IconService], // <--- Now it depends on your Service
      multi: true,
    },
  ]
};
