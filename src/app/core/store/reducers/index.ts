import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromApp from './app.reducer';
import * as fromPayment from './payment.reducer';

export interface CoreState {
  app: fromApp.State;
  payment: fromPayment.State;
}

export const reducers: ActionReducerMap<CoreState> = {
  app: fromApp.reducer,
  payment: fromPayment.reducer,
};

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [] : [];
export const coreFeatureState = createFeatureSelector<CoreState>('core');
export const appFeatureState = createFeatureSelector<fromApp.State>('app');
export const paymentFeatureState = createFeatureSelector<fromPayment.State>('payment');
