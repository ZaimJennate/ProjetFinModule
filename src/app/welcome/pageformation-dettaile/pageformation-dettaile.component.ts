import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-pageformation-dettaile',
  templateUrl: './pageformation-dettaile.component.html',
  styleUrls: ['./pageformation-dettaile.component.css']
})
export class PageformationDettaileComponent implements OnInit {
  menuType: string = 'default';
  userFirstName: string = ''; 
  formations: any[] = [];
  userRole:string='';
  formationId: string | null = null;
  formationDetails: any = {};
  userId: string | null = null;
  id:string | null = null;


  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router, private authService: AuthService) { }


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
    this.route.paramMap.subscribe(params => {
      this.formationId = params.get('id');
      if (this.formationId) {
        this.fetchFormationDetails();
      }
      this.authService.getCurrentUserId().subscribe(
        (id: string) => {
          this.userId = id;
        },
        (error: any) => {
          console.error('Error fetching user ID', error);
        }
      );

    });
  }

    
  

  fetchFormationDetails() {
    // Make an HTTP request to fetch details using this.formationId
    // Example:
    this.http.get(`http://localhost:8080/getFormationById/${this.formationId}`)
      .subscribe((data: any) => {
        this.formationDetails = data;
      });
  }

  addToCart() {
    console.log('Inside addToCart method');  // Log to check if this is executed
  
    if (this.userId && this.formationId) {
      console.log('User ID:', this.userId);
      console.log('Formation ID:', this.formationId);
  
      this.authService.addToCart(this.userId, this.formationId).subscribe(
        () => {
          console.log('Added to cart successfully');
        },
        (error) => {
          console.error('Error adding to cart', error);
        }
      );
    } else {
      console.error('User ID or Formation ID is null');
    }
  }
  
    
  
}
