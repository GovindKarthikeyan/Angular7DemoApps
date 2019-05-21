import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-check-value-changes',
	templateUrl: './check-value-changes.component.html',
	styleUrls: ['./check-value-changes.component.scss']
})
export class CheckValueChangesComponent implements AfterViewInit {
	@ViewChild('form') form: NgForm;
	valueChanges$: Observable<any>;

	ngAfterViewInit() {
		this.valueChanges$ = this.form.valueChanges.pipe(
			tap((c) => console.log(`Async pipe Subscribe ? - ${JSON.stringify(c)}`))
		);
	}
}
