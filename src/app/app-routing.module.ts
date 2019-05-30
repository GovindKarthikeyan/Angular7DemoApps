import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayPalComponent } from './features/pay-pal/pay-pal.component';
import { HomeComponent } from './features/home/home.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ExchangeComponent } from './features/exchange/exchange.component';
import { CheckValueChangesComponent } from './features/check-value-changes/check-value-changes.component';
import { AnalyzeJsonFileComponent } from './features/analyze-json-file/analyze-json-file.component';
import { BuildingDemoComponent } from './features/building-demo/building-demo.component';
import { PaymentComponent } from './features/payment/payment.component';
import { ReactiveFormComponent } from './features/reactive-form/reactive-form.component';
import { PassengersPageComponent } from './features/passengers-page/passengers-page.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'payment',
		component: PaymentComponent
	},
	{
		path: 'passenger',
		component: PassengersPageComponent
	},
	{
		path: 'paypal',
		component: PayPalComponent
	},
	{
		path: 'about',
		component: AboutUsComponent
	},
	{
		path: 'contactus',
		component: ContactUsComponent
	},
	{
		path: 'exchange',
		component: ExchangeComponent
	},
	{
		path: 'building',
		component: BuildingDemoComponent
	},
	{
		path: 'valuechange',
		component: CheckValueChangesComponent
	},
	{
		path: 'analyzejson',
		component: AnalyzeJsonFileComponent
	},
	{
		path: 'reactive',
		component: ReactiveFormComponent
	},
	{
		path: '',
		component: HomeComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
