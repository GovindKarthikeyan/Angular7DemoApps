import { Action } from '@ngrx/store';

export enum PaymentActionTypes {
  LOAD_PAYMENTS = '[Payment] Load Payments',
  SET_EXPRESS_CHECKOUT_SUCCESS = '[Payment] Set Express Checkout Success',
  SET_EXPRESS_CHECKOUT_FAILURE = '[Payment] Set Express Checkout Failure',
  SET_EXPRESS_CHECKOUT_CANCEL = '[Payment] Set Express Checkout Cancel',
  SET_EXPRESS_CHECKOUT_DETAILS = '[Payment] Set Express Checkout Details'
}

export class LoadPayments implements Action {
  readonly type = PaymentActionTypes.LOAD_PAYMENTS;
}

export class SetExpressCheckOutSuccess implements Action {
  readonly type = PaymentActionTypes.SET_EXPRESS_CHECKOUT_SUCCESS
  constructor(public payload: any){}
}

export class SetExpressCheckOutFailure implements Action {
  readonly type = PaymentActionTypes.SET_EXPRESS_CHECKOUT_FAILURE
  constructor(public payload: any){}
}

export class SetExpressCheckOutCancel implements Action {
  readonly type = PaymentActionTypes.SET_EXPRESS_CHECKOUT_CANCEL
  constructor(public payload: any){}
}

export class SetExpressCheckOutDetails implements Action {
  readonly type = PaymentActionTypes.SET_EXPRESS_CHECKOUT_DETAILS
  constructor(public payload: any){}
}

export type PaymentActions = 
  LoadPayments 
  | SetExpressCheckOutSuccess
  | SetExpressCheckOutCancel
  | SetExpressCheckOutFailure
  | SetExpressCheckOutDetails;

