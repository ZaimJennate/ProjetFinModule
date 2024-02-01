import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { OrganizationService } from 'src/app/organization.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuType: string = 'default';


  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('currentUser')) {
          console.warn("this is inside the seller area");
          this.menuType = "seller";
          // Fetch user details, including first name
          this.authService.getUserDetails().subscribe(
            (userDetails: any) => {
              this.userFirstName = userDetails.firstname;
              this.userRole=userDetails.role;
              if(this.userRole=='Formateur'){
                console.warn("outside the Formateur area");
                this.menuType = "Formateur";
              }
            },
            (error: any) => {
              console.error('Error fetching user details', error);
            }
          );
        } else {
          console.warn("outside the seller area");
          this.menuType = "default";
        }
      }
    });

    this.authService.organizationUrl.subscribe(url => {
      this.organizationUrl = url;
    });
    
  }

 // nav.component.ts

onContinue() {
  // Add the logic to check if the email exists
  this.authService.checkEmailExists(this.organizationUrl).subscribe(
    (response: any) => {
      this.isEmailExists = response.exists;
      if (this.isEmailExists) {
        // Handle the case where the email exists
        console.error('Error: Email already exists');
      } else {
        // Continue with your logic when the email doesn't exist
        console.log('Continue with your logic');
      }
    },
    (error: any) => {
      console.error('Error checking email existence', error);
    }
  );
}

  logout() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['/']);
  }
  onContinueClick() {
    this.organizationService.register(this.organizationUrl).subscribe(
      (response) => {
        // Organization URL exists, handle accordingly
        console.log('Organization URL exists:', response);
      },
      (error) => {
        // Organization URL doesn't exist or error, handle accordingly
        console.error('Error checking organization URL:', error);
      }
    );
  }
}
