import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CoreModule } from '../core.module';
import { delay, tap } from 'rxjs/operators';

@Injectable({ providedIn: CoreModule })
export class ExchangeService {
	constructor(private http: HttpClient) { }

	public getExchangeRate(base: string, symbols: string): Observable<any> {
		return this.http.get(`https://api.exchangeratesapi.io/latest`,
			{
				params: new HttpParams()
					.set('base', base)
					.append('symbols', symbols)
			}
		)
	}

	public getBugetBuilding(buildingId: number): Observable<any> {
		return this.http.get(`https://api.exchangeratesapi.io/latest`,
			{
				params: new HttpParams()
					.set('base', 'USD')
					.append('symbols', 'INR')
			}
		);
	}

	public getBuildingUnits(buildingId: number): Observable<any> {
		return this.http.get(`https://api.exchangeratesapi.io/latest`,
			{
				params: new HttpParams()
					.set('base', 'USD')
					.append('symbols', 'INR')
			}
		).pipe(
			delay(5000),
			tap((r) => console.log(r))
		);
	}

	public getfllDen() {
		return this.http.get("'../../../assets/files/fll-den.json'");
	}

}
