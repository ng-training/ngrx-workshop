import * as userActions from './login/actions';

export function reset(reducer) {
  return function newReducer(state, action) {
    if (action.type === userActions.logout) {
      state = undefined;
    }

    const nextState = reducer(state, action);

    return nextState;
  };
}
