import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements AfterViewInit {
  heroStyle: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_BASE_HREF) baseHref: string
  ) {
    const base = baseHref.endsWith('/') ? baseHref : baseHref + '/';

    // Cache-bust hero image on deployments (GitHub Pages can aggressively cache assets).
    const version = (globalThis as any).__APP_VERSION__ ?? Date.now();
    this.heroStyle = `url('${base}assets/hero.jpg?v=${version}') center/cover no-repeat`;
  }

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {

      const elements = document.querySelectorAll('.fade-up');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, { threshold: 0.2 });

      elements.forEach(el => observer.observe(el));
    }
  }
}
