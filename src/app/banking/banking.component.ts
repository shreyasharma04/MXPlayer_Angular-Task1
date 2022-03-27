import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {

  initialAmount: any = '';
  withdrawAmount: any = '';
  depositAmount: any = '';
  balance:number = 0;

  openAcc(){
    let initialAmount = this.initialAmount;

    if(initialAmount == ''){
      alert("Empty amount plz enter correct input");
     }
     else if(initialAmount < 5000){
     alert('Amount should be greater than 5000');
    }
    else{
      this.balance = this.initialAmount;
    }
  

  }

  withdraw(){
    let totalBalance = this.balance;
    let withdrawAmount = this.withdrawAmount;
    let balanceAmount = Number(totalBalance) - Number(withdrawAmount);
    if(withdrawAmount == ''){
      alert("Amount is empty ");
  }
  else if(withdrawAmount > totalBalance){
      alert('Plz enter less amount');
  }
  else{
    this.balance = balanceAmount;
    
  }

  }

  deposit(){
    let totalBalance = this.balance;
    let depositAmount = this.depositAmount;
    let balanceAmount = Number(totalBalance) + Number(depositAmount) ;
    if(depositAmount == ''){
      alert("Amount is empty plz enter correct input ");
  } else{

    this.balance = balanceAmount;
  }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
