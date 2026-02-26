// Prerender/static generation is intentionally disabled.
// All routes render dynamically at request time using SSR.

import { RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Prerender common routes for static hosting (GitHub Pages)
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'puppies',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'process',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'shop',
    renderMode: RenderMode.Prerender,
  },

  // If you want detail pages like /shop/:slug to be prerendered on GitHub Pages,
  // you must list concrete paths here (e.g., 'shop/tshirt', 'shop/hoodie', ...).

  // Fallback: render remaining routes on-demand when using an SSR server.
  // (GitHub Pages won’t use this at runtime, but this keeps the config valid.)
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
