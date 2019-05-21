import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/core/services/exchange.service';

@Component({
	selector: 'app-exchange',
	templateUrl: './exchange.component.html',
	styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

	invoicesSumTotalValue = 0;

	constructor(private exchnageService: ExchangeService) { }

	ngOnInit() {
		this.calcInvTotalValue();
	}

	calcInvTotalValue() {
		let prods = [
			{
				price: 10,
				currency: 'INR'
			},
			{
				price: 20,
				currency: 'EUR'
			}
		];

		prods.forEach(c => {
			let price = c['price'];
			let currency = c['currency'];

			this.exchnageService.getExchangeRate("USD", currency).subscribe(
				vl => {
					let exRate = vl['rates'][currency];
					this.invoicesSumTotalValue = this.invoicesSumTotalValue + (parseFloat(String(price)) * parseFloat(exRate));
				},
				(error: any) => console.log(error)
			);
		});
	}
}
