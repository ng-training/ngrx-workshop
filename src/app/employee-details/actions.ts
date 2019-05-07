import { createAction, props } from '@ngrx/store';

import { Employee } from '../models/employee.model';

export const fetchEmployee = createAction(
  '[Employee Details] Fetch',
  props<{ id: string }>()
);

export const fetchEmployeeSuccess = createAction(
  '[Employee Details] Fetch Success',
  props<{ employee: Employee }>()
);

export const fetchEmployeeError = createAction(
  '[Employee Details] Fetch Error'
);
