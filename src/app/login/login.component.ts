import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { login } from './actions';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <mat-form-field>
        <input matInput placeholder="username" #userInput />
      </mat-form-field>
      <a
        mat-raised-button
        color="primary"
        type="button"
        routerLink="/employees"
        (click)="login(userInput.value)"
      >
        Go</a
      >
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 0 auto;
      }
    `,
  ],
})
export class LoginComponent {
  constructor(readonly store: Store<{}>) {}

  login(username: string) {
    this.store.dispatch(login({ username }));
  }
}
