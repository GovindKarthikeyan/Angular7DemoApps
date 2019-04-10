import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CoreModule } from '../core.module';

@Injectable({ providedIn: CoreModule })
export class PaypalService {
  constructor(private http: HttpClient) { }

  public setExpressCheckOut(d: any, a: any): Observable<any> {
    console.log('SetExpCheck()');
    console.log(d);
    console.log(a);
    return this.http.get('https://localhost:44358/api/payment/setexpresscheckout');
  }
  
  public approve(d: any, a: any): Observable<any> {
    console.log('approve()');
    console.log(d);
    console.log(a);
    const body = { tokenId: d.orderID, orderId: d.orderID, payerId: d.payerID };
   return this.http.post(`https://localhost:44358/api/payment/approve`, body);
  }
}
