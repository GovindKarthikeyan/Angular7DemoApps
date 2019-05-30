import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'app-passengers-page',
	templateUrl: './passengers-page.component.html',
	styleUrls: ['./passengers-page.component.scss']
})
export class PassengersPageComponent implements OnInit {

	form: FormGroup;
	passengerFormGroup: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.passengerFormGroup = this.fb.group({
			title: [],
			firstName: [],
			middleName: [],
			lastName: [],
			dob: [],
		});
		this.form = this.fb.group({
			passengers: this.fb.array([this.passengerFormGroup])
		});
	}
	add() {
		(<FormArray>this.form.get('passengers')).push(this.passengerFormGroup);
	}
	remove() {
		(<FormArray>this.form.get('passengers')).removeAt(0);
	}
	submitClick(form: FormGroup) {
		console.log(form)
	}

}
