import { Component } from '@angular/core';
import { AppFacade } from 'src/app/application/app.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  constructor(private appFacade: AppFacade) {
    // HomeComponent needs no additional Sidenav
    this.appFacade.setSidenavToggle(false);
  }
}
