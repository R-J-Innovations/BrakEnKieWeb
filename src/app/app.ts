import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.html'
})
export class App {
}
