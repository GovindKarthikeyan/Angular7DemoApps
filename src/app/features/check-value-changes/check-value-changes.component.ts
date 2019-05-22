import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of, from, interval, timer, range } from 'rxjs';
import { tap, delay, take, debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-check-value-changes',
	templateUrl: './check-value-changes.component.html',
	styleUrls: ['./check-value-changes.component.scss']
})
export class CheckValueChangesComponent implements OnInit, AfterViewInit {
	@ViewChild('form') form: NgForm;
	valueChanges$: Observable<any>;
	timer$: Observable<number>;
	interval$: Observable<number>;
	of$: Observable<string>;
	from$: Observable<string>;
	range$: Observable<number>;
	ngOnInit() {
		this.of$ = of('Hello world!').pipe(map((x: string) => x.toUpperCase()));
		this.from$ = from('Hello World!').pipe(map((x: string) => x.toUpperCase()), delay(2000));
		this.timer$ = timer(1000, 1000).pipe(take(10)); // After 1 sec emit every 1 secs finish after 10 emission
		this.range$ = range(1, 1000).pipe(debounceTime(1)); // Emit 1 through 1000 and finish
		this.interval$ = interval(1000).pipe(take(5)); // Every sec emit, finish after 5 emission

		// this.of$.subscribe(
		// 	(n) => console.log(`Of ...${n}, at ${new Date()}`),
		// 	null,
		// 	() => console.log('of$ Finished...'));

		// this.from$.subscribe(
		// 	(n) => console.log(`From ...${n}, at ${new Date()}`),
		// 	null,
		// 	() => console.log('from$ Finished...'));

		this.timer$.pipe(
			switchMap((f) => this.interval$.pipe(
				tap((o) => console.log(`SwitchMap() ${f},${o}`))
			))).subscribe(
				(x) => console.log(`SwithMap() ${x}`),
				null,
				() => console.log('Finished...')
			);

		// this.timer$.subscribe(
		// 	(n) => console.log(`Timer ...${n}, at ${new Date()}`),
		// 	null,
		// 	() => console.log('timer$ Finished...'));

		// this.range$.subscribe(
		// 	(n) => console.log(`Range ...${n}, at ${new Date()}`),
		// 	null,
		// 	() => console.log('range$ Finished...'));

		// this.interval$.subscribe(
		// 	(n) => console.log(`Interval ...${n}, at ${new Date()}`),
		// 	null,
		// 	() => console.log('interval$ Finished...'));
	}

	ngAfterViewInit() {
		this.valueChanges$ = this.form.valueChanges.pipe(
			tap((c) => console.log(`Async pipe Subscribe ? - ${JSON.stringify(c)}`))
		);
	}
}
