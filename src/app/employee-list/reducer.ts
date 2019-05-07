import { createReducer, on } from '@ngrx/store';

import { Employee } from '../models/employee.model';
import { fetchEmployeesSuccess } from './actions';

export interface EmployeeListState {
  employees: EmployeesState;
}

export interface EmployeesState {
  entities: Employee[];
}

export const initialState: EmployeesState = {
  entities: [],
};

export const employeesReducer = createReducer(
  initialState,
  on(fetchEmployeesSuccess, (state, { employees }) => ({
    ...state,
    entities: employees,
  }))
);
