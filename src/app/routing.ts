import { Routes } from '@angular/router';


import { BankingComponent } from './banking/banking.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { EmiComponent } from './emi/emi.component';
import { FormsComponent } from './forms/forms.component';
import { Component } from '@angular/core';


export const routes: Routes = [
   
    { path: 'forms', component: FormsComponent },
    { path: 'banking', component: BankingComponent },
    { path: 'credit-card', component: CreditCardComponent},
    { path: 'emi', component: EmiComponent},


];