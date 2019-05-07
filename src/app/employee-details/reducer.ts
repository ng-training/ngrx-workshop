import { createReducer, on } from '@ngrx/store';

import { Employee } from '../models/employee.model';
import { fetchEmployeeSuccess } from './actions';

export interface EmployeeDetailsState {
  data: EmployeeState;
}

export interface EmployeeState {
  employee: Employee | null;
}

export const initialState: EmployeeState = {
  employee: null,
};

export const employeeReducer = createReducer(
  initialState,
  on(fetchEmployeeSuccess, (state, { employee }) => ({ ...state, employee }))
);
