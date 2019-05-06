import { createSelector } from '@ngrx/store';

import { GlobalState } from './reducer';

export const getUserState = (state: GlobalState) => state.user;

export const getUserName = createSelector(
  getUserState,
  state => state.username
);
