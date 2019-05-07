import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { EmployeeService } from '../services/employee.service';
import {
  fetchEmployee,
  fetchEmployeeSuccess,
  fetchEmployeeError,
} from './actions';

@Injectable()
export class EmployeeEffects {
  loadEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployee),
      switchMap(action =>
        this.employeeService.getEmployee(action.id).pipe(
          map(employee => fetchEmployeeSuccess({ employee })),
          catchError(() => of(fetchEmployeeError()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}
}
