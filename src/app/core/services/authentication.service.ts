import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  loggedIn = false;
  result: any;

  constructor() { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
          resolve(this.loggedIn);
      }
    );
    return promise;
  }

  login(pswd: string) {
    if (pswd.trim() === 'ciao_bell0') {
      this.loggedIn = true;
    }
  }

}
