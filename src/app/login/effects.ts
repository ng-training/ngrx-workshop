import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as userAction from './actions';

@Injectable()
export class UserEffects {
  logoutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userAction.logout),
        tap(_ => this.router.navigateByUrl('login'))
      ),
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
