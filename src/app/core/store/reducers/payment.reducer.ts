import { PaymentActionTypes, PaymentActions } from '../actions/payment.actions';

export interface State {
  payPal: any
}

export const initialState: State = {
  payPal: {
    expressCheckOutSuccess: null,
    expressCheckOutCancel: null,
    expressCheckOutFailure: null,
    expressCheckOutDetails: null
  }
};

export function reducer(state = initialState, action: PaymentActions): State {
  switch (action.type) {
    
    case PaymentActionTypes.SET_EXPRESS_CHECKOUT_SUCCESS:
      return {
        ...state,
        payPal: { 
          ...state.payPal,
          expressCheckOutSuccess: action.payload
        }
      }

    case PaymentActionTypes.SET_EXPRESS_CHECKOUT_FAILURE:
      return {
        ...state,
        payPal: { 
          ...state.payPal,
          expressCheckOutFailure: action.payload
        }
      }

      case PaymentActionTypes.SET_EXPRESS_CHECKOUT_CANCEL:
      return {
        ...state,
        payPal: { 
          ...state.payPal,
          expressCheckOutCancel: action.payload
        }
      }

      case PaymentActionTypes.SET_EXPRESS_CHECKOUT_DETAILS:
      return {
        ...state,
        payPal: { 
          ...state.payPal, 
          expressCheckOutDetails: action.payload 
        }
      }
      
      default:
      return state;
  }
}
