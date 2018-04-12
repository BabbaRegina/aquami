import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  password: string;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {}

  login() {
    console.log('login ', this.password);
    if (this.password) {
      this.authService.login(this.password);
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
