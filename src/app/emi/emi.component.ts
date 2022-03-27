import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {
  amount: any="";
  interest: any="";
  years: any="";
  loanAmount = 0;



  calcEmi(){

    let principal = this.amount;
    let CalculateInterest = this.interest / 100 / 12;
    let calculatedPayments = this.years * 12;
  
  
    let x = Math.pow(1 + CalculateInterest, calculatedPayments);
    let monthly = (principal * x * CalculateInterest) / (x - 1);
    let monthlyPayment = monthly;
  
    let totalInterest = (monthly * calculatedPayments - principal);
      
    return this.loanAmount = Math.round((monthly * calculatedPayments));
  }
    
    

  constructor() { }

  ngOnInit(): void {
  }

}
