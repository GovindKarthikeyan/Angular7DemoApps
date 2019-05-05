import { createSelector } from '@ngrx/store';
import { paymentFeatureState } from '../reducers';

export const paymentState = createSelector(
    paymentFeatureState,
    (state) => state
);

export const payPalState = createSelector(
    paymentState,
    (state) => state && state.payPal && state.payPal.expressCheckOutDetails && 
    (
        { 
            email: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('EMAIL=')) || '').replace('EMAIL=',''),
            payerId: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('PAYERID=')) || '').replace('PAYERID=',''),
            tokenId: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('TOKEN=')) || '').replace('TOKEN=',''),
            billingAddress: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('SHIPTOSTREET=')) || '').replace('SHIPTOSTREET=',''),
            billingCity: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('SHIPTOCITY=')) || '').replace('SHIPTOCITY=',''),
            billingZipPostal: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('SHIPTOZIP=')) || '').replace('SHIPTOZIP=',''),
            billingState: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('SHIPTOSTATE=')) || '').replace('SHIPTOSTATE=',''),
            billingCountry: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('SHIPTOCOUNTRYCODE=')) || '').replace('SHIPTOCOUNTRYCODE=',''),
            accountHolderName: (state.payPal.expressCheckOutDetails.find(d => d.startsWith('SHIPTONAME=')) || '').replace('SHIPTONAME=','')
        }
    )
);