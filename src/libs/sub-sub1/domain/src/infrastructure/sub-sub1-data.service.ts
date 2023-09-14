import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubSub1DataService {
  public getExampleData(id: string): Observable<any> {
    // Normally does an HTTP call here.
    return of({ id: id, value: 'example' }).pipe(delay(400));
  }
}
