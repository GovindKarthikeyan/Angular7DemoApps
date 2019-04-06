import { Action } from '@ngrx/store';

export enum PaymentActionTypes {
  LoadPayments = '[Payment] Load Payments',
  
  
}

export class LoadPayments implements Action {
  readonly type = PaymentActionTypes.LoadPayments;
}


export type PaymentActions = LoadPayments;
