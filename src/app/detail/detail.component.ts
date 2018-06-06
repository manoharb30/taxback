import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from "../data.service";
import { TRANS } from '../models/transaction.interface'
import { CURRENCY } from "../models/transaction.interface";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: object;
  currency: CURRENCY[] = [
    { key: 'INR', value: 'INR' },
    { key: 'EUR', value: 'EUR' },
    { key: 'GBP', value: 'GBP' },
    { key: 'USD', value: 'USD' },
  ]
  constructor(private data: DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((data: Params) => this.data.getUser(data.id))
      .subscribe((data) => {
        console.log(data);
        this.detail = data;
      })
  }

  onSubmit(value: TRANS, valid: boolean) {
    if (valid) {
      value.currency = "INR";
      console.log(value);
      this.data.updateTransaction(value).subscribe((res) => {
        console.log(res);
      })

    }
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/')
  }


}
