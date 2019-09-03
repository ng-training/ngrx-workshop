import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MatSnackBar } from '@angular/material';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';

import { EmployeesEffects } from './effects';
import {
  fetchEmployees,
  fetchEmployeesError,
  fetchEmployeesSuccess,
} from './actions';
import { EmployeeService } from '../services/employee.service';
import { employees } from '../services/employees';

describe('Emp list effects tests', () => {
  let actions$: Observable<Action>;
  let effects: EmployeesEffects;

  const serviceMock = jasmine.createSpyObj('service', ['getAll']);
  const snackbarMock = jasmine.createSpyObj('snackbar', ['open']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeesEffects,
        provideMockActions(() => actions$),
        {
          provide: EmployeeService,
          useValue: serviceMock,
        },
        {
          provide: MatSnackBar,
          useValue: snackbarMock,
        },
      ],
    });

    effects = TestBed.get<EmployeesEffects>(EmployeesEffects);
  });

  it('can be initialized', () => {
    expect(effects).toBeDefined();
  });

  it('can read employees', () => {
    serviceMock.getAll.and.returnValue(of(employees));

    actions$ = of(fetchEmployees());

    effects.loadEmployees$.subscribe({
      next: action => {
        expect(action.type).toBe(fetchEmployeesSuccess.type);
        expect(action).toEqual(fetchEmployeesSuccess({ employees }));
      },
    });
  });

  it('can handle error', () => {
    serviceMock.getAll.and.returnValue(throwError('Internal server error'));

    actions$ = of(fetchEmployees());

    effects.loadEmployees$.subscribe({
      next: action => {
        expect(action.type).toEqual(fetchEmployeesError.type);
      },
    });
  });

  it('shows message on load success', () => {
    actions$ = of(fetchEmployeesSuccess({ employees: [] }));

    effects.showMessage$.subscribe();

    expect(snackbarMock.open).toHaveBeenCalled();
  });
});
