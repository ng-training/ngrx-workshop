import { ActionReducer } from '@ngrx/store';

export function logger(reducer: ActionReducer<any>) {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
