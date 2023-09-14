import { createAction, props } from '@ngrx/store';

export const setSidenavToggle = createAction(
  '[X-LNG] Set Sidenav Toggle',
  props<{ enabled: boolean }>()
);
