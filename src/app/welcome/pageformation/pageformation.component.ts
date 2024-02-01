import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-pageformation',
  templateUrl: './pageformation.component.html',
  styleUrls: ['./pageformation.component.css']
})
export class PageformationComponent implements OnInit {
  menuType: string = 'default';
  userFirstName: string = ''; 
  formations: any[] = [];
  userRole:string='';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('currentUser')) {
          console.warn("this is inside the seller area");
          this.menuType = "seller";
          // Fetch user details, including first name
          this.authService.getUserDetails().subscribe(
            (userDetails: any) => {
              this.userFirstName = userDetails.firstname; 
              this.userRole=userDetails.role;// Replace with the actual property in your user details
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
    this.fetchFormateurs();
  }

  fetchFormateurs() {
    this.http.get('http://localhost:8080/afficherFormations')
      .subscribe((data: any) => {
        this.formations = data;
      });
  }
 


  
}
