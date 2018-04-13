import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  wrongPassword: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.wrongPassword = false;
    this.signupForm = new FormGroup({
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    console.log(this.signupForm);
    this.authService.login(this.signupForm.value.password);
    this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        this.router.navigate(['/home']);
      } else {
        console.log('password non valida');
        this.wrongPassword = true;
      }
    });
  }
}
