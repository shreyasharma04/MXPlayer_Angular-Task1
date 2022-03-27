import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { BankingComponent } from './banking/banking.component';
import { EmiComponent } from './emi/emi.component';
import { FormsModule } from '@angular/forms';
import { routes } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CreditCardComponent,
    BankingComponent,
    EmiComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
