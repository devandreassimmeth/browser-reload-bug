import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '../+state/app.actions';
import * as selectors from '../+state/app.selectors';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  public sidenavToggleEnabled$ = this.store.select(
    selectors.sidenavToggleEnabled
  );

  constructor(private store: Store) {}

  public setSidenavToggle(enabled: boolean): void {
    this.store.dispatch(actions.setSidenavToggle({ enabled }));
  }
}
