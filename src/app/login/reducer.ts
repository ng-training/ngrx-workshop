import { createReducer, on } from '@ngrx/store';

import * as loginActions from './actions';

export interface GlobalState {
  user: UserState;
}

export interface UserState {
  username?: string;
}

export const initialState: UserState = {
  username: '',
};

export const userReducer = createReducer(
  initialState,
  on(loginActions.login, (state, { username }) => ({ ...state, username })),
  on(loginActions.logout, _ => initialState)
);
