import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <mat-form-field>
        <input matInput placeholder="username" />
      </mat-form-field>
      <a
        mat-raised-button
        color="primary"
        type="button"
        routerLink="/employees"
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
export class LoginComponent {}
