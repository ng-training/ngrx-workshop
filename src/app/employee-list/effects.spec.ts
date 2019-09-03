import { Observable, of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { EmployeeEffects } from '../employee-details/effects';
import { EmployeeService } from '../services/employee.service';
import { getRouterParams } from '../router/selectors';
import { employees } from '../services/employees';
import {
  fetchEmployee,
  fetchEmployeeSuccess,
  fetchEmployeeError,
} from '../employee-details/actions';

describe('Emp details', () => {
  let actions$: Observable<Action>;
  let effects: EmployeeEffects;

  const serviceMock = jasmine.createSpyObj('service', ['getEmployee']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [
            {
              selector: getRouterParams,
              value: { id: 1 },
            },
          ],
        }),
        { provide: EmployeeService, useValue: serviceMock },
      ],
    });

    effects = TestBed.get<EmployeeEffects>(EmployeeEffects);
  });

  it('can be initialized', () => {
    expect(effects).toBeDefined();
  });

  it('can read employee details', () => {
    const testEmployee = of(employees[0]);
    serviceMock.getEmployee.and.returnValue(testEmployee);

    actions$ = of(fetchEmployee());

    effects.loadEmployee$.subscribe({
      next: action => {
        expect(action.type).toEqual(fetchEmployeeSuccess.type);
      },
    });
  });

  it('can handle errors', () => {
    serviceMock.getEmployee.and.returnValue(
      throwError('Internal server error')
    );

    actions$ = of(fetchEmployee());

    effects.loadEmployee$.subscribe({
      next: action => {
        expect(action.type).toEqual(fetchEmployeeError.type);
      },
    });
  });
});
