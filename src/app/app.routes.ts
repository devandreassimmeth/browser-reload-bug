import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TOP_SUB1_ROUTES } from './components/top-sub1/top-sub1.routes';
import { TopSub1Component } from './components/top-sub1/top-sub1.component';

export const APP_ROUTES: Routes = [
  {
    path: 'top-sub1',
    component: TopSub1Component,
    children: TOP_SUB1_ROUTES,
  },
  // More Top-Level Routes here!
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
];
