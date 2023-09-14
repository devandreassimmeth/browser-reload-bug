import { createAction, props } from '@ngrx/store';

export const loadExampleData = createAction(
  '[Sub Sub1] Load Example Data',
  props<{ exampleId: string }>()
);

export const loadExampleDataSuccess = createAction(
  '[Sub Sub1] Load Example Data Success',
  props<{ data: any }>()
);

export const loadExampleDataFailure = createAction(
  '[Sub Sub1] Load Example Data Failure',
  props<{ error: any }>()
);

export const resetState = createAction('[Sub Sub1] Reset State');
