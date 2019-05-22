import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, AfterViewInit, AfterViewChecked {
	@ViewChild('form') contactForm: NgForm;
	obs$: Observable<any>;

	ngOnInit() {
		this.obs$ = timer(15000).pipe(
			map((t) => ([
				{ name: `Name : ${t + 1}`, index: t },
				{ name: `Name : ${t + 2}`, index: t },
				{ name: `Name : ${t + 3}`, index: t },
				{ name: `Name : ${t + 4}`, index: t }
			])),
			take(5));
		setTimeout(() => {
			this.obs$.subscribe();
		}, 5000);
	}

	ngAfterViewInit() {
		console.log(`AfterViewInit:${this.contactForm &&
			this.contactForm.control &&
			this.contactForm.control.controls &&
			(<FormGroup>this.contactForm.control.controls.passengers) &&
			(<FormGroup>this.contactForm.control.controls.passengers).controls}`);
	}

	ngAfterViewChecked() {
		console.log(`AfterViewChecked:${this.contactForm &&
			this.contactForm.control &&
			this.contactForm.control.controls &&
			(<FormGroup>this.contactForm.control.controls.passengers) &&
			(<FormGroup>this.contactForm.control.controls.passengers).controls}`);
	}

}
