import { Component, OnInit, AfterViewChecked, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PaypalService } from 'src/app/core/services/paypal.service';
import { tap } from 'rxjs/operators';
import { CoreState } from 'src/app/core/store/reducers';
import { Store } from '@ngrx/store';
import { SetExpressCheckOutSuccess, SetExpressCheckOutDetails, SetExpressCheckOutFailure, SetExpressCheckOutCancel } from 'src/app/core/store/actions/payment.actions';

declare let paypal: any;
@Component({
	selector: 'app-pay-pal',
	templateUrl: './pay-pal.component.html',
	styleUrls: ['./pay-pal.component.scss']
})
export class PayPalComponent implements OnInit, AfterViewChecked {
	addScript: boolean = false;
	paypalLoad: boolean = true;
	finalAmount: number = 1;

	constructor(
		@Inject(DOCUMENT) private doc: Document,
		private payPalService: PaypalService,
		private store: Store<CoreState>
	) { }

	ngOnInit() {

	}

	ngAfterViewChecked(): void {
		if (!this.addScript) {
			this.addPaypalScript().then(() => {
				paypal.Buttons({
					createOrder: (d, a) => this.payPalService.setExpressCheckOut(d, a).pipe(tap(r => console.log(`createOrder() => : ${JSON.stringify(r)}`))).toPromise(),
					onApprove: (d, a) => {
						this.store.dispatch(new SetExpressCheckOutSuccess(d))
						return this.payPalService.getExpressCheckOut(d.orderID).pipe(
							tap(r => console.log(`getExpressCheckout() => : ${JSON.stringify(r)}`)),
							tap(r => this.store.dispatch(new SetExpressCheckOutDetails(r)))
						).toPromise();
						//this.payPalService.approve(d, a).pipe(map(r => console.log(`onApprove() => : ${JSON.stringify(r)}`))).toPromise(),
					},
					onCancel: (d, a) => this.store.dispatch(new SetExpressCheckOutCancel(d)),
					onError: (d, a) => this.store.dispatch(new SetExpressCheckOutFailure(d)),
					style: { label: 'checkout' }
				}).render('#paypal-button-container');
				this.paypalLoad = false;
			});
		}
	}

	private addPaypalScript() {
		this.addScript = true;
		return new Promise((resolve, reject) => {
			let scripttagElement = this.doc.createElement('script');
			scripttagElement.src = 'https://www.paypal.com/sdk/js?client-id=AegGjK2B25IwdrDsIar1madkho3IOLK0B90GeouMD35rpGQlNpdYoE5EvAM-zpyEcJ27fLJjSHMhONk7&intent=order&currency=USD&disable-funding=credit,card';
			scripttagElement.onload = resolve;
			this.doc.body.appendChild(scripttagElement);
		})
	}
}
