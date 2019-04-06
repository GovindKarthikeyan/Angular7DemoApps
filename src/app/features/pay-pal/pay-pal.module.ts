import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayPalComponent } from './pay-pal.component';

@NgModule({
  declarations: [PayPalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PayPalComponent
  ]
})
export class PayPalModule { }
