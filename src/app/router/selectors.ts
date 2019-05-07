import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateUrl } from './custom-route-serializer';

const getRouterFeatureState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');

const getRouterState = createSelector(
  getRouterFeatureState,
  router => router && router.state
);

export const getRouterParams = createSelector(
  getRouterState,
  state => state && state.params
);
