import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { Subscription } from 'rxjs';
import { AppFacade } from './application/app.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription | undefined = new Subscription();

  // Is used to set the Sidenav-Toggle in the Navbar (not implemented here)
  protected isSidenavToggleEnabled = false;

  constructor(private appFacade: AppFacade) {
    setTheme('bs5');
  }

  public ngOnInit(): void {
    this.subscriptions!.add(
      this.appFacade.sidenavToggleEnabled$.subscribe((sidenavToggleEnabled) => {
        this.isSidenavToggleEnabled = sidenavToggleEnabled;
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions!.unsubscribe();
    this.subscriptions = undefined;
  }
}
