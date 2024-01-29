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

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(): void {
    if (this.credentials.username && this.credentials.password) {
      this.authService.loginUser(this.credentials).subscribe(
        response => {
          if (response.message) {
            console.log('Login successful!', response.message);
            // Redirect to a different page after successful login
            // Use the correct route structure when navigating
            if (this.credentials.username=="admin@gmail.com"){
            console.log('pageadmin!', response.message);
            this.router.navigate(['/Dashboard']);
            }
            else{
            console.log('pageuser!', response.message);
            localStorage.setItem('currentUser', this.credentials.username);
            this.router.navigate(['/'])}
// Update the route as needed
          } else if (response.error) {
            console.log('Login failed');

            // Handle failed login (e.g., display an error message)
          }
        },
        
      );
      
      }
    }      
}
