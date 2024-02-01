import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-planned-formations',
  templateUrl: './planned-formations.component.html',
  styleUrls: ['./planned-formations.component.css']
})
export class PlannedFormationsComponent implements OnInit {
  formateurId!: number;
  plannedFormations: any[] = [];

  constructor(private planifierFormationService: AuthService) { }

  ngOnInit(): void {
    this.planifierFormationService.getCurrentUserId().subscribe(
      formateurId => {
        this.formateurId = +formateurId; // Convert to number
        this.loadFormateurs();
      },
      error => {
        console.error('Error fetching current user ID:', error);
      }
    );
  }
  loadFormateurs() {
    this.planifierFormationService.getPlannedFormationsForFormateur(this.formateurId)
  .subscribe(
    plannedFormations => {
      this.plannedFormations = plannedFormations;
      console.log('Formations:', plannedFormations);
    },
    (error) => {
      console.error('Error fetching planned formations:', error);
      if (error instanceof HttpErrorResponse) {
        console.error('Status:', error.status);
        console.error('Status Text:', error.statusText);
      }
    }
  );


  }

}
