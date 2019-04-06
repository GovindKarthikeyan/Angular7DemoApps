import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromApp from './app.reducer';
import * as fromPayment from './payment.reducer';

export interface State {
  app: fromApp.State;
  payment: fromPayment.State;
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  payment: fromPayment.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
export const appFeatureState = createFeatureSelector<fromApp.State>('app');
