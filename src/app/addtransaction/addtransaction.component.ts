import { Component, OnInit } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";

import { Router } from '@angular/router';
import { TRANS } from "../models/transaction.interface";
import { CURRENCY } from "../models/transaction.interface";
import { DataService } from "../data.service";




@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.scss']
})
export class AddtransactionComponent implements OnInit {
  sending: boolean = false;
  optionsSelect: Array<any>;

  value: TRANS;

  contactForm: FormGroup;
  currency: CURRENCY[] = [
    { key: 'INR', value: 'INR' },
    { key: 'EUR', value: 'EUR' },
    { key: 'GBP', value: 'GBP' },
    { key: 'USD', value: 'USD' },
  ]
  constructor(private data: DataService, private router: Router, public progress: NgProgress) {

  }
  ngOnInit() {
  }

  onSubmit(value: TRANS, valid: boolean) {
    if (valid) {
      this.data.addTransaction(value).subscribe((res) => {
        console.log(res);
      })

    }
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 1000);
  }

  cancel() {
    this.router.navigateByUrl('/')
  }

}
