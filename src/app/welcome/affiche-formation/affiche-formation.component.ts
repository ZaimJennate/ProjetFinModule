import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Formation } from '../pageformation/formation.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-affiche-formation',
  templateUrl: './affiche-formation.component.html',
  styleUrls: ['./affiche-formation.component.css']
})
export class AfficheFormationComponent implements OnInit {

  userId!: number; // Remove the hardcoded value

  formations: Formation[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Fetch the current user ID when the component initializes
    this.authService.getCurrentUserId().subscribe(
      userId => {
        this.userId = +userId; // Convert to number
        this.loadFormations();
      },
      error => {
        console.error('Error fetching current user ID:', error);
      }
    );
  }

  loadFormations() {
    this.authService.getUserCartFormations(this.userId)
      .subscribe(
        formations => {
          this.formations = formations;
          console.log('Formations:', formations);
        },
        error => {
          console.error('Error fetching formations:', error);
  
          if (error instanceof HttpErrorResponse) {
            console.error('Status:', error.status);
            console.error('Status Text:', error.statusText);
          }
        }
      );
  }
}
    
    

