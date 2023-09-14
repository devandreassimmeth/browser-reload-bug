import { createFeature, createReducer, on } from '@ngrx/store';
import * as SubSub1Actions from './sub-sub1.actions';

export const SUB_SUB1_FEATURE_KEY = 'sub-sub1';

export interface SubSub1State {
  exampleData: any;
  loading: boolean;
  error: string | null;
}

export interface SubSub1PartialState {
  readonly [SUB_SUB1_FEATURE_KEY]: SubSub1State;
}

export const initialSubSub1State: SubSub1State = {
  exampleData: undefined,
  loading: false,
  error: null,
};

export const subSub1Reducer = createReducer(
  initialSubSub1State,

  on(SubSub1Actions.loadExampleData, (state) => ({
    ...state,
    exampleData: undefined,
    loading: true,
    error: null,
  })),
  on(SubSub1Actions.loadExampleDataSuccess, (state, { data }) => ({
    ...state,
    exampleData: data,
    loading: false,
  })),
  on(SubSub1Actions.loadExampleDataFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(SubSub1Actions.resetState, (state) => ({
    ...state,
    exampleData: undefined,
    loading: false,
    error: null,
  }))
);

export const subSub1Feature = createFeature({
  name: SUB_SUB1_FEATURE_KEY,
  reducer: subSub1Reducer,
});
