import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../models/user';


@Injectable()
export class AuthenticationService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  register(data: User) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post("/api/newUser", JSON.stringify(data), {headers});
  }



}
