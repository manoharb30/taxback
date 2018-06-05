import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http'

import { TRANS } from "../models/transaction.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  transdata$: TRANS[];
  constructor(private data: DataService, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    const url = 'https://jointhecrew.in/api/txns/priya@gmail.com';
    // Make the GET HTTP request with options {observe: 'response'}
    // The 'observe' option tell HttpClient which data it has to return.
    this.http.get(url, { observe: 'response' })
      // Reading the HTTP response
      // Note the generic
      .subscribe((response: HttpResponse<TRANS[]>) => {
        console.log('HTTP response', response);
        console.log('HTTP response : Headers', response.headers);
        console.log('HTTP response : status', response.status);
        console.log('HTTP response : url', response.url);
        // Note that we don't need parse the response, we can access
        // it directly through 'body' property
        console.log('HTTP response : body', response.body);
        this.transdata$ = response.body;
      });

    // this.data.getUsers().subscribe(
    //   data => this.transdata$ = data
    // )
  }

  addTransaction() {
    this.router.navigateByUrl('/add');
  }

  handleData(data) {
    this.router.navigateByUrl('/details/' + data.id);
  }

  handleDelete(data) {
    this.data.deleteUser(data.id).subscribe((user) => {
      this.transdata$ = this.transdata$.filter((txn: TRANS) => {
        return txn.id !== data.id;
      });
    });
    // this.data.deleteUser(data.id).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // )
  }

}
