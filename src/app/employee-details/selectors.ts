import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeDetailsState } from './reducer';

const getEmployeeDetailsState = createFeatureSelector<EmployeeDetailsState>(
  'employeeDetails'
);

const getEmployeeData = createSelector(
  getEmployeeDetailsState,
  state => state.data
);

export const getEmployee = createSelector(
  getEmployeeData,
  state => state.employee
);
