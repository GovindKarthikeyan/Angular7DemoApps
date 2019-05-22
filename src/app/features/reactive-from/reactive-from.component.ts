import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'app-reactive-from',
	templateUrl: './reactive-from.component.html',
	styleUrls: ['./reactive-from.component.scss']
})
export class ReactiveFromComponent implements OnInit {
	passengers$ = of([
		{ name: `Name : ${1}`, paxKey: 'a' },
		{ name: `Name : ${2}`, paxKey: 'b' },
		{ name: `Name : ${3}`, paxKey: 'c' },
		{ name: `Name : ${4}`, paxKey: 'd' }
	]).pipe(
		delay(2000),
		take(1));
	profileForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.profileForm = this.fb.group({
		});

		this.passengers$.subscribe(passengers => {
			console.log(passengers);

			passengers.forEach(p => {
				this.profileForm.addControl(p.paxKey, new FormGroup({
					name: new FormControl(p.name, Validators.required)
				}));
			});
		})
	}

	log() {
		console.log(this.profileForm);
	}

}
