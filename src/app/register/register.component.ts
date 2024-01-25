import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isUserSignedUp: boolean = false;

  user = { email: '', password: '', firstname: '', lastname: '' };

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.user).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
        this.isUserSignedUp = true; // Set the flag to true when signup is successful
      },
      (error) => {
        // Handle error response
        console.error(error);
      }
    );
  }
}
