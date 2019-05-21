import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from 'src/app/core/store/reducers';
import { Subscription } from 'rxjs';
import { payPalState } from 'src/app/core/store/selectors/payment.selector';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';

export enum PaymentType {
	Uplift = 'uplift',
	Navitaire = 'navitaire',
	PayPal = 'paypal'
}

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

	buyerEmail: string;
	tokenId: string;
	payerId: string;
	sub: Subscription[] = [];
	pType: PaymentType;
	availablePaymentTypes = PaymentType;
	paypal: any = null;
	showPayPal = true;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.pType = PaymentType.Navitaire;
		this.sub.push(this.store.select(payPalState).subscribe(p => {
			console.log(p);
			this.buyerEmail = (p && p.email) || this.buyerEmail;
			this.tokenId = (p && p.tokenId) || this.tokenId;
			this.payerId = (p && p.payerId) || this.payerId;
			this.pType = (p && p.email) ? PaymentType.PayPal : PaymentType.Navitaire;
		}));
	}
	ngAfterViewInit() {

	}
	book() {
		this.showPayPal = !this.showPayPal;
		this.pType = (this.pType === PaymentType.PayPal) ? PaymentType.Navitaire : PaymentType.PayPal;
		console.log('Clicked');
	}

	ngOnDestory() {
		this.sub.forEach(s => s.unsubscribe());
	}
}
