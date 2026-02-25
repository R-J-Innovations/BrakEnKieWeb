import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-puppies',
  standalone: true,
  templateUrl: './puppies.html',
  styleUrl: './puppies.scss',
})
export class PuppiesComponent implements AfterViewInit {
  louisStyle: string;
  amelieStyle: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_BASE_HREF) baseHref: string
  ) {
    const base = baseHref.endsWith('/') ? baseHref : baseHref + '/';
    this.louisStyle = `url('${base}assets/louis.jpg')`;
    this.amelieStyle = `url('${base}assets/amelie.jpg')`;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }
}
