import { Component } from '@angular/core';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
   selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameErrorTip = false;
  passwordErrorTip = false;

  constructor(public authService: AuthService, public router: Router) {
  }

  login(username, password) {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        if (username == "" || password == "") {
          return;
        } else {
          if (username.trim() == "Cassie" && password.trim() == "888888") {
            let redirect ='/index';
           
            let navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };

            // Redirect the user
            this.router.navigate([redirect], navigationExtras);
          }
          if (username.trim() != "Cassie") {
            this.usernameErrorTip = true;
          } else {
            this.usernameErrorTip = false;
          }
          if (password.trim() != "888888") {
            this.passwordErrorTip = true;
          } else {
            this.passwordErrorTip = false;
          }
        }

      }
    });
  }

  logout() {
    this.authService.logout();
  }
}