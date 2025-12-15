import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { importProvidersFrom } from '@angular/core';
import { IconService } from './core/services/icon.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(), // ✅ Add this to enable HTTP services
    importProvidersFrom(MatIconModule), // ✅ Import required modules
    MatIconRegistry, // ✅ Register Material Icons
    IconService, // ✅ Ensuring it’s available globally
    ]
};
