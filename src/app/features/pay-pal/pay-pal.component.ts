import { Component, OnInit, AfterViewChecked, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PaypalService } from 'src/app/core/services/paypal.service';

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
  payPalConfig = {
      createOrder: (d, a) => this.payPalService.setExpressCheckOut().toPromise(),
      onApprove: (d, a) => a.order.capture().then((d) => console.log(d)),
      onCancel: (d, a) => console.log(d),
      onError: (d, a) => console.log(d)            
  };

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private payPalService: PaypalService) { }
  
  ngOnInit() {}

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Buttons(this.payPalConfig).render('#paypal-button-container');
        this.paypalLoad = false;
      });
    }
  }
  
  private addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = this.doc.createElement('script');    
      scripttagElement.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD';
      scripttagElement.onload = resolve;
      this.doc.body.appendChild(scripttagElement);
    })
  }
}
