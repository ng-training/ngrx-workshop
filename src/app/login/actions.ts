import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Screen] User login',
  props<{ username: string }>()
);

export const logout = createAction('[App Logout] User logout');
