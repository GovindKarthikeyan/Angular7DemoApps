import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
	passengers$ = of([
		{ firstName: `firstName : ${1}`, middleName: '', lastName: `lastName: ${1}`, paxKey: 'a' },
		{ firstName: `firstName : ${2}`, middleName: '', lastName: `lastName: ${1}`, paxKey: 'a' },
		{ firstName: `firstName : ${3}`, middleName: '', lastName: `lastName: ${1}`, paxKey: 'a' },
		{ firstName: `firstName : ${4}`, middleName: '', lastName: `lastName: ${1}`, paxKey: 'a' },
	]).pipe(
		delay(2000),
		take(1));

	profileForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.profileForm = this.fb.group({});

		this.passengers$.subscribe(passengers => {
			console.log(passengers);

			passengers.forEach(p => {
				this.profileForm.addControl(p.paxKey, new FormGroup({
					firstName: new FormControl(p.firstName, Validators.required),
					middleName: new FormControl(p.middleName),
					lastName: new FormControl(p.lastName, Validators.required)
				}));
			});
		})
	}

	log() {
		console.log(this.profileForm);
	}

}
