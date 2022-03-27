import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  salary: any='';
  getStatus: string='';

  Eligiblity(){
    if(this.salary < 20000){
      this.getStatus= "You dont have eligiblity: "
    }
    else if(this.salary >= 20000 && this.salary <30000){
      this.getStatus = " Eligible for Silver card"
    }
    else if(this.salary >= 30000 && this.salary <40000){
      this.getStatus = "Eligible for Gold card"
    }
    else{
      this.getStatus = "Eligible for Platinum card"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
