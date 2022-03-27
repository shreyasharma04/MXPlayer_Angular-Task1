import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
  user:any={};

  submit()
  {
    alert(JSON.stringify(this.user));
    console.log(this.user);
  }

}




 