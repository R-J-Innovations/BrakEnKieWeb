import { ApplicationConfig, provideBrowserGlobalErrorListeners, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_BASE_HREF,
      useFactory: (platformId: object) =>
        isPlatformBrowser(platformId)
          ? (document.querySelector('base')?.getAttribute('href') ?? '/')
          : '/',
      deps: [PLATFORM_ID],
    },
  ],
};
