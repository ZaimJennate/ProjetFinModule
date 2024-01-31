import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuType: string = 'default';
  userFirstName: string = '';  // Add this variable

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('currentUser')) {
          console.warn("this is inside the seller area");
          this.menuType = "seller";
          // Fetch user details, including first name
          this.authService.getUserDetails().subscribe(
            (userDetails: any) => {
              this.userFirstName = userDetails.firstname; // Replace with the actual property in your user details
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
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.route.navigate(['/']);
  }
}
