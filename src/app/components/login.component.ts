import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RouterModule, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  login(form: NgForm) {
    console.log('login ', form);
    if (form.value.password) {
      this.authService.login(form.value.password);
      this.authService.isAuthenticated().then((authenticated: boolean) => {
        if (authenticated) {
          this.router.navigate(['/home']);
        }
      });
    } else {
      console.log('password non valida');
    }
  }
}
