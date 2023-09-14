import * as SubSub1Actions from './sub-sub1.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SubSub1DataService } from '../infrastructure/sub-sub1-data.service';
import { Injectable } from '@angular/core';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class SubSub1Effects {
  loadExample$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubSub1Actions.loadExampleData),
      switchMap((action) =>
        this.subSub1DataService.getExampleData(action.exampleId).pipe(
          map((example) =>
            SubSub1Actions.loadExampleDataSuccess({
              data: example,
            })
          ),
          catchError((error) => {
            // Propper ErrorHandling here
            return of(SubSub1Actions.loadExampleDataFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private subSub1DataService: SubSub1DataService
  ) {}
}
