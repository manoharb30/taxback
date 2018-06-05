import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { HttpHeaders, HttpRequest } from '@angular/common/http';

import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { TRANS } from "./models/transaction.interface";
import 'rxjs/add/operator/map';
const USER_API = 'https://jointhecrew.in/api/txns/priya@gmail.com'
const httpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});
const options = {
  headers: httpHeaders
};

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(USER_API)
  }

  getUser(id: number) {

    return this.http.get(USER_API + '/' + id);

  }

  deleteUser(id: number) {
    const url = 'https://jointhecrew.in/api/txns/priya@gmail.com/' + id;
    return this.http.delete(url)
  }

  addTransaction(trans: TRANS) {
    return this.http.post(USER_API, trans, options);
  }

  updateTransaction(trans: TRANS) {
    let api = USER_API + '/' + trans.id;
    return this.http.post(api, trans, options);
  }
}
