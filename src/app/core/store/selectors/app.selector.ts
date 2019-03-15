import { createSelector, State } from '@ngrx/store';
import { appFeatureState } from '../reducers';

export const appState = createSelector(
    appFeatureState,
    (state) => state
);