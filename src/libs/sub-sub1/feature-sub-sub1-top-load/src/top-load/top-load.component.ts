import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SubSub1Facade } from 'src/libs/sub-sub1/domain/src/application/sub-sub1.facade';

@Component({
  selector: 'feature-sub-sub1-top-load',
  templateUrl: './top-load.component.html',
  styleUrls: ['./top-load.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgIf],
})
export class TopLoadComponent implements OnInit, OnDestroy {
  // This component loads the backend data over its parent-component
  private subscriptions: Subscription | undefined = new Subscription();

  protected exampleData$: Observable<any>;
  protected loading$: Observable<boolean>;
  protected error$: Observable<any>;

  constructor(private subSub1Facade: SubSub1Facade) {
    this.exampleData$ = this.subSub1Facade.exampleData$;
    this.loading$ = this.subSub1Facade.loading$;
    this.error$ = this.subSub1Facade.error$;
  }

  public ngOnInit(): void {
    this.subscriptions!.add(
      this.exampleData$.subscribe((data) =>
        console.log(`Current Data Value: ${data}`)
      )
    );
    this.subscriptions!.add(
      this.loading$.subscribe((loading) =>
        console.log(`Current Loading Value: ${loading}`)
      )
    );
    this.subscriptions!.add(
      this.error$.subscribe((error) =>
        console.log(`Current Error Value: ${error}`)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
    this.subscriptions = undefined;
    this.subSub1Facade.resetState();
  }
}
