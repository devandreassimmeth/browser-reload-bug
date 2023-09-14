import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../+state/sub-sub1.actions';
import * as selectors from '../+state/sub-sub1.selectors';

@Injectable({ providedIn: 'root' })
export class SubSub1Facade {
  public exampleData$ = this.store.select(selectors.getExampleData);
  public loading$ = this.store.select(selectors.getLoading);
  public error$ = this.store.select(selectors.getErrors);

  constructor(private store: Store) {}

  public getExampleData(id: string): void {
    this.store.dispatch(actions.loadExampleData({ exampleId: id }));
  }

  public resetState(): void {
    this.store.dispatch(actions.resetState());
  }
}
