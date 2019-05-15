import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Employee } from '../models/employee.model';
import { fetchEmployeesSuccess } from './actions';

export interface EmployeeListState {
  employees: EmployeesState;
}

export interface EmployeesState extends EntityState<Employee> {
  // Can extend the interface with additional properties here
  // selectedId: number;
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const employeesReducer = createReducer(
  adapter.getInitialState(),
  on(fetchEmployeesSuccess, (state, { employees }) =>
    adapter.addAll(employees, state)
  )
);
