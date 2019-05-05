import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PayPalModule } from '../pay-pal/pay-pal.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		PayPalModule,
		FormsModule
	],
	exports: [
		HomeComponent
	]
})
export class HomeModule { }
