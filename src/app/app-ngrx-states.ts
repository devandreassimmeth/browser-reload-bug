import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { subSub1Feature } from 'src/libs/sub-sub1/domain/src/+state/sub-sub1.reducer';
import { SubSub1Effects } from 'src/libs/sub-sub1/domain/src/+state/sub-sub1.effects';

export function provideSubSub1Domain() {
  return [provideState(subSub1Feature), provideEffects([SubSub1Effects])];
}
