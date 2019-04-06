import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: CoreModule
})
export class PaypalService {
  constructor(private http: HttpClient) { }

  public setExpressCheckOut(): Observable<any> {
    return of('Hello World !!!');          
  }

}