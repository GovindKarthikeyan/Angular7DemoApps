import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from 'src/app/core/store/reducers';
import { Subscription } from 'rxjs';
import { payPalState } from 'src/app/core/store/selectors/payment.selector';

export enum PaymentType {
	Uplift = 'uplift',
	Navitaire = 'navitaire',
	PayPal = 'paypal'
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	buyerEmail: string;
	tokenId: string;
	payerId: string;
	sub: Subscription[] = [];
	//paymentType: string = 'Uplift';
	paymentType: PaymentType;
	paypal: any = null;

	constructor(private store: Store<CoreState>) { }

	ngOnInit() {
		this.sub.push(this.store.select(payPalState).subscribe(p => {
			console.log(p);
			this.buyerEmail = (p && p.email) || this.buyerEmail;
			this.tokenId = (p && p.tokenId) || this.tokenId;
			this.payerId = (p && p.payerId) || this.payerId;
			//this.paymentType = (p && 'PayPal') || this.paymentType;
			this.paymentType = PaymentType.Uplift;
		}));

	}

	book() {
		console.log('Clicked');
	}

	ngOnDestory() {
		this.sub.forEach(s => s.unsubscribe());
	}
}
