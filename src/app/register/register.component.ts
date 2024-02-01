import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isUserSignedUp: boolean = false;
  isEmailExists: boolean = false;
  user = { email: '', password: '', firstname: '', lastname: '', role: '' };

  // File uploader configuration
  public uploader: FileUploader = new FileUploader({ url: '/api/upload', itemAlias: 'image' });

  constructor(private authService: AuthService, private router: Router) {
    // Set up callback functions for file upload
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      // Handle the response after the image is uploaded, you can extract the image URL from the response
    };
  }

  register(): void {
    // Perform user registration
    this.authService.register(this.user).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
        this.isUserSignedUp = true;
        this.showSuccessAlert();
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle error response
        console.error(error);

        if (error.status === 409) {
          this.isEmailExists = true;
          this.showErrorAlert('Email already exists');
        } else {
          this.showErrorAlert('Registration failed');
        }
      }
    );

    // Upload the image file
    if (this.uploader.queue.length > 0) {
      this.uploader.uploadAll();
    }
  }

  showSuccessAlert(): void {
    alert('Registration successful! Please login to continue.');
  }

  showErrorAlert(message: string): void {
    alert('Error: ' + message);
  }
  onFileChange(event: any): void {
    // Set the first file in the uploader queue to the selected file
    const file = event.target.files[0];
    this.uploader.queue = [];
    this.uploader.addToQueue([file]);
  }
  
}
