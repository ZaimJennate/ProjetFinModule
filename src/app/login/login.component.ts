import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: any = {};
  errorMessage: string = ''; // New variable to store error message

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(): void {
    if (this.credentials.username && this.credentials.password) {
      this.authService.loginUser(this.credentials).subscribe(
        response => {
          if (response.message) {
            console.log('Login successful!', response.message);
            if (this.credentials.username == "admin@gmail.com") {
              console.log('pageadmin!', response.message);
              this.router.navigate(['/Dashboard']);
            } else {
              console.log('pageuser!', response.message);
              localStorage.setItem('currentUser', this.credentials.username);
              this.router.navigate(['/']);
            }
          } else if (response.error) {
            console.log('Login failed');

            // Set the error message to display in the template
            this.errorMessage = 'Incorrect email or password';
          }
        },
        error => {
          console.error('Login failed:', error);

          // Set a generic error message for unexpected errors
          this.errorMessage = 'An unexpected error occurred';
        }
      );
    }
  }
}
