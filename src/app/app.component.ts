import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { getUserName } from './login/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-workshop';

  user$ = this.store.select(getUserName);

  constructor(readonly store: Store<{}>) {}
}
