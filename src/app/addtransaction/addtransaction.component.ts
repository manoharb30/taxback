import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { TRANS } from "../models/transaction.interface";
import { DataService } from "../data.service";




@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.scss']
})
export class AddtransactionComponent implements OnInit {

  optionsSelect: Array<any>;

  value: TRANS;

  contactForm: FormGroup;
  currencyList: object[] = [
    { key: 1, value: 'INR' },
    { key: 2, value: 'EUR' },
    { key: 3, value: 'GBP' },
    { key: 4, value: 'USD' },
  ]
  constructor(private data: DataService, private router: Router) {

  }
  ngOnInit() {

  }

  onSubmit(value: TRANS, valid: boolean) {
    if (valid) {
      value.currency = "INR";
      console.log(value);
      this.data.addTransaction(value).subscribe((res) => {
        console.log(res);
      })

    }
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/')
  }

}
