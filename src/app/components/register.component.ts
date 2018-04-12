import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  userList: Array<User>;
  user: User;

  constructor(private _authService: AuthenticationService) {
    this._authService.getUsers().subscribe(res => this.userList = res);
   }

   refresh() {
    this._authService.getUsers().subscribe(res => this.userList = res);
   }
  ngOnInit() {
    this.user = new User();
  }

  onSubmit(f: NgForm) {
    console.log(f.value.username + ' si vuole registrare');
    if (f.value.password1 === f.value.password2) {
      this.user.username = f.value.username;
      this.user.email = f.value.email;
      this.user.password = f.value.password1;
      this._authService.register(this.user).subscribe(
        res => {
          console.log('RES:', res);
          if (res === 200) {
            this.refresh();
          }
        });
    } else {
      alert('Attenzione, password non corrisponde');
    }
  }
}
