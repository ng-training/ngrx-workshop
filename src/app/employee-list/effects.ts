import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
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

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}
}
