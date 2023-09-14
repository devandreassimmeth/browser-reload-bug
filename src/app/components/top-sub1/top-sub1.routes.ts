import { Routes } from '@angular/router';

export const TOP_SUB1_ROUTES: Routes = [
  {
    path: 'sub-sub1',
    loadChildren: () =>
      import(
        './../../../libs/sub-sub1/util-domain-routes/src/sub-sub1-util-domain.routes'
      ).then((m) => m.SUB_SUB1_DOMAIN_ROUTES),
  },
  // Other SubRoutes here
];
