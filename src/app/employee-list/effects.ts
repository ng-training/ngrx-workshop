import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { EmployeeService } from '../services/employee.service';
import {
  fetchEmployees,
  fetchEmployeesSuccess,
  fetchEmployeesError,
} from './actions';

@Injectable()
export class EmployeesEffects {
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchEmployees),
      switchMap(() =>
        this.employeeService.getAll().pipe(
          map(employees => fetchEmployeesSuccess({ employees })),
          catchError(() => of(fetchEmployeesError()))
        )
      )
    )
  );

  showMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchEmployeesSuccess),
        tap(() => this.snackBar.open('Loaded....', null, { duration: 1000 }))
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) {}
}
