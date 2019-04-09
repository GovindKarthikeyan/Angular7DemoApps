import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayPalComponent } from './features/pay-pal/pay-pal.component';
import { HomeComponent } from './features/home/home.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { AboutUsComponent } from './features/about-us/about-us.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
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
