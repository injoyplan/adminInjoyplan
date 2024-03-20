import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
registerLocaleData(localeEs, "es");
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),[{ provide: LOCALE_ID, useValue: "es" }],  provideHttpClient(), provideClientHydration()]
};
