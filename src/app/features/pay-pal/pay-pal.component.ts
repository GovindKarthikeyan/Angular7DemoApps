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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private paypalService: PaypalService) { }
  
  ngOnInit() { 
    const sub = this.paypalService.setExpressCheckOut().subscribe(x => console.log(x));
    sub.unsubscribe();
  }

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Buttons({
            createOrder: function(data, actions) {
              const url = `https://localhost:44358/api/values`;
                  const result = actions.order.create({
                     purchase_units: [{
                         amount: {
                             value: '0.01'
                         }
                     }]
                 });
              console.log(result);
              return result;
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              console.log(details)   ;
              console.log('Transaction completed by ' + details.payer.name.given_name + '!');
            });
          }
          }).render('#paypal-button-container');
        this.paypalLoad = false;
      })
    }
  }
  
  private addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = this.document.createElement('script');    
      scripttagElement.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
}
