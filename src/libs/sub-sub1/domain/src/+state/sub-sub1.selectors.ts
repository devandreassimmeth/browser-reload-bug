import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubSub1State, SUB_SUB1_FEATURE_KEY } from './sub-sub1.reducer';

export const getSubSub1State =
  createFeatureSelector<SubSub1State>(SUB_SUB1_FEATURE_KEY);

export const getExampleData = createSelector(
  getSubSub1State,
  (state: SubSub1State) => state.exampleData
);

export const getLoading = createSelector(
  getSubSub1State,
  (state: SubSub1State) => state.loading
);

export const getErrors = createSelector(
  getSubSub1State,
  (state: SubSub1State) => state.error
);
