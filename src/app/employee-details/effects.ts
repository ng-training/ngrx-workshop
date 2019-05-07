import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

import { EmployeeService } from '../services/employee.service';
import {
  fetchEmployee,
  fetchEmployeeSuccess,
  fetchEmployeeError,
} from './actions';
import { getRouterParams } from '../router/selectors';

@Injectable()
export class EmployeeEffects {
  selectedEmployeeId$ = this.store.select(getRouterParams);

  loadEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployee),
      withLatestFrom(this.selectedEmployeeId$),
      switchMap(([_, { id }]) =>
        this.employeeService.getEmployee(id).pipe(
          map(employee => fetchEmployeeSuccess({ employee })),
          catchError(() => of(fetchEmployeeError()))
        )
      )
    )
  );

  constructor(
    private store: Store<{}>,
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}
}
