import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from "../data.service";
import { TRANS } from '../models/transaction.interface'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: object;
currencyList: object[] = [
    { key: 1, value: 'INR' },
    { key: 2, value: 'EUR' },
    { key: 3, value: 'GBP' },
    { key: 4, value: 'USD' },
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
