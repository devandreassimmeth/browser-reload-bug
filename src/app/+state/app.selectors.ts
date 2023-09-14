import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_KEY, State } from './app.reducer';

export const selectAppState = createFeatureSelector<State>(APP_KEY);

export const sidenavToggleEnabled = createSelector(
  selectAppState,
  (state) => state.sidenavToggleEnabled
);
