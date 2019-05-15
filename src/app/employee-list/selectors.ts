import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EmployeeListState, EmployeesState, adapter } from './reducer';

const getEmployeeListState = createFeatureSelector<EmployeeListState>(
  'employeesList'
);

const getEmployeesState = createSelector(
  getEmployeeListState,
  state => state.employees
);

const { selectAll } = adapter.getSelectors();

export const getEmployees = createSelector(
  getEmployeesState,
  selectAll
);
