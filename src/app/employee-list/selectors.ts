import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EmployeeListState, EmployeesState } from './reducer';

const getEmployeeListState = createFeatureSelector<EmployeeListState>(
  'employeesList'
);

const getEmployeesState = createSelector(
  getEmployeeListState,
  state => state.employees
);

const getEmployeesEntities = (state: EmployeesState) => state.entities;

export const getEmployees = createSelector(
  getEmployeesState,
  getEmployeesEntities
);
