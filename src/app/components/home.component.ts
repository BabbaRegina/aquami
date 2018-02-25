import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  users: Array<any>;

  constructor(private _authService: AuthenticationService) {
    this._authService.getUsers().subscribe(res => this.users = res);
   }

  ngOnInit() {
  }

}
