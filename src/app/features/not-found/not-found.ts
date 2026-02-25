import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <div class="container">
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <a routerLink="/">Back to Home</a>
      </div>
    </section>
  `,
  styles: [
    `
      .page { padding: 8rem 2rem 4rem; }
      .container { max-width: 900px; margin: 0 auto; }
    `,
  ],
})
export class NotFoundComponent {}

