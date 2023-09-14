import { Routes } from '@angular/router';

export const SUB_SUB1_DOMAIN_ROUTES: Routes = [
  {
    path: 'top-load',
    loadChildren: () =>
      import(
        './../../feature-sub-sub1-top-load/src/feature-sub-sub1-top-load.routes'
      ).then((m) => m.FEATURE_SUB_SUB1_TOP_LOAD_ROUTES),
  },
  {
    path: 'component-load',
    loadChildren: () =>
      import(
        './../../feature-sub-sub1-component-load/src/feature-sub-sub1-component-load.routes'
      ).then((m) => m.FEATURE_SUB_SUB1_COMPONENT_LOAD_ROUTES),
  },
  // More Routes here
];
