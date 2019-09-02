import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { getUserName } from './login/selectors';

import * as userActions from './login/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-workshop';

  user$ = this.store.select(getUserName);

  constructor(readonly store: Store<{}>, readonly router: Router) {}

  logout() {
    this.store.dispatch(userActions.logout());
    this.router.navigateByUrl('login');
  }
}
