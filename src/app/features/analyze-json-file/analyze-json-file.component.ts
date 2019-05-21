import { Component, OnInit } from '@angular/core';
import fllden from 'src/assets/files/fll-den.json';

@Component({
	selector: 'app-analyze-json-file',
	templateUrl: './analyze-json-file.component.html',
	styleUrls: ['./analyze-json-file.component.scss']
})
export class AnalyzeJsonFileComponent implements OnInit {

	logDisplay: any[] = [];

	constructor() { }

	ngOnInit() {
		//this.logDescriptionUSage();
		this.logMediaUSage();
	}

	logDescriptionUSage() {
		let result = fllden.data.VAXXML.Response.Availability.Results;
		let descLength = fllden.data.VAXXML.Response.Descriptions.Description.length;
		let arr = fllden.data.VAXXML.Response.Descriptions.Description.map( //.slice(1, 50)
			d => ({ Key: d.Key, Count: JSON.stringify(result).split(d.Key.trim()).length })).filter(r => r.Count > 1) || [];

		arr.map(r => this.logDisplay.push(r));

		this.logDisplay.push(`Descriptions count : ${descLength}`);
		this.logDisplay.push(`Hit count : ${arr.length}, Miss count : ${descLength - arr.length}`);
	}

	logMediaUSage() {
		let result = fllden.data.VAXXML.Response.Availability.Results;
		let mediaLength = fllden.data.VAXXML.Response.MediaLinks.Media.length;
		let arr = fllden.data.VAXXML.Response.MediaLinks.Media.map( //.slice(1, 50)
			d => ({ Key: d.MediaKey, Count: JSON.stringify(result).split(d.MediaKey.trim()).length })).filter(r => r.Count > 1) || [];

		arr.map(r => this.logDisplay.push(r));
		this.logDisplay.push(`Media count : ${mediaLength}`);
		this.logDisplay.push(`Hit count : ${arr.length}, Miss count : ${mediaLength - arr.length}`);
	}
}
