import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayPalComponent } from './features/pay-pal/pay-pal.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

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
