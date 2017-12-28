import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  appUser: AppUser;

  constructor(public auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.auth.logout();
  }

}
