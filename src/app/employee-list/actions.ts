import { createAction, props } from '@ngrx/store';
import { Employee } from '../models/employee.model';

export const fetchEmployees = createAction('[Employees List] Fetch');

export const fetchEmployeesSuccess = createAction(
  '[Employees List] Fetch Success',
  props<{ employees: Employee[] }>()
);

export const fetchEmployeesError = createAction(
  '[Employees List] Fetch Failed'
);
