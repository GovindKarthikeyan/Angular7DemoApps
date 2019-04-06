import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './core/store/effects/app.effects';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { HomeModule } from './features/home/home.module';
import { PayPalModule } from './features/pay-pal/pay-pal.module';
import { CoreModule } from './core/core.module';
import { PaymentEffects } from './core/store/effects/payment.effects';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PayPalModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([PaymentEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
