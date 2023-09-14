import { Component, OnDestroy } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AppFacade } from 'src/app/application/app.facade';
import { SubSub1Facade } from 'src/libs/sub-sub1/domain/src/application/sub-sub1.facade';

@Component({
  selector: 'app-top-sub1',
  templateUrl: './top-sub1.component.html',
  styleUrls: ['./top-sub1.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterOutlet],
})
export class TopSub1Component implements OnDestroy {
  private subscriptions: Subscription | undefined = new Subscription();
  private lastActivatedRoute = '';

  constructor(
    private router: Router,
    private appFacade: AppFacade,
    private subSub1Facade: SubSub1Facade
  ) {
    // This component has a Sidenav -> Needs Sidenav-Toggle
    this.appFacade.setSidenavToggle(true);

    this.subscriptions!.add(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            if (
              event.url.includes('/top-load') &&
              !this.lastActivatedRoute.includes('/top-load')
            ) {
              this.subSub1Facade.getExampleData('exampleId');
            }

            this.lastActivatedRoute = event.url;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
    this.subscriptions = undefined;
    this.subSub1Facade.resetState();
  }
}
