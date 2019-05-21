import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of, from, interval } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Component({
	selector: 'app-check-value-changes',
	templateUrl: './check-value-changes.component.html',
	styleUrls: ['./check-value-changes.component.scss']
})
export class CheckValueChangesComponent implements OnInit, AfterViewInit {
	@ViewChild('form') form: NgForm;
	valueChanges$: Observable<any>;
	timer$: Observable<number>;

	ngOnInit() {
		this.timer$ = interval(1000); //from([1, 2, 3, 4, 5]);
		this.timer$.pipe(
			delay(1000),
		).subscribe(
			(n) => console.log(n),
			null,
			() => console.log('finished...')
		);
	}

	ngAfterViewInit() {
		this.valueChanges$ = this.form.valueChanges.pipe(
			tap((c) => console.log(`Async pipe Subscribe ? - ${JSON.stringify(c)}`))
		);
	}
}
