import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { PuppiesComponent } from './features/puppies/puppies';
import { ProcessComponent } from './features/process/process';
import { ContactComponent } from './features/contact/contact';
import { NotFoundComponent } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'puppies', component: PuppiesComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
