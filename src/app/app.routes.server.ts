// Prerender/static generation is intentionally disabled.
// All routes render dynamically at request time using SSR.

import { RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
