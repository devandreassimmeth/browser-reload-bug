import { createReducer, on, createFeature } from '@ngrx/store';
import * as AppActions from './app.actions';

export const APP_KEY = 'app';

export interface State {
  sidenavToggleEnabled: boolean;
}

export const initialState: State = {
  sidenavToggleEnabled: false,
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setSidenavToggle, (state, { enabled }) => ({
    ...state,
    sidenavToggleEnabled: enabled,
  }))
);

export const appFeature = createFeature({
  name: APP_KEY,
  reducer: appReducer,
});
