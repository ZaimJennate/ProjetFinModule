// planifier-formation.component.ts
import { Component, OnInit } from '@angular/core';
import { PlanifierFormationService } from './planifier-formation.service';

@Component({
  selector: 'app-planifier-formation',
  templateUrl: './planifier-formation.component.html',
  styleUrls: ['./planifier-formation.component.css']
})
export class PlanifierFormationComponent implements OnInit {
  formations: any[] = [];
  formateurs: any[] = [];
  entreprises: any[] = [];
  // planifier-formation.component.ts
planifications: any[] = [];

  selectedFormation: any;
  selectedFormateur: any;
  selectedEntreprise: any;
  dateDebut: any;
  dateFin: any;

  plannedFormations: any[] = [];
  columnsToDisplay = ['titre_formation', 'formateur_nom', 'nom_entreprise', 'date_debut', 'date_fin'];

  constructor(private planifierFormationService: PlanifierFormationService) {}

  ngOnInit(): void {
    this.loadFormations();
    this.loadFormateurs();
    this.loadEntreprises();
    this.loadPlanifications();
  }

  loadFormations() {
    this.planifierFormationService.getFormations().subscribe(
      (data) => {
        this.formations = data;
      },
      (error) => {
        console.error('Error fetching formations:', error);
      }
    );
  }

  loadFormateurs() {
    this.planifierFormationService.getFormateurs().subscribe(
      (data) => {
        this.formateurs = data;
      },
      (error) => {
        console.error('Error fetching formateurs:', error);
      }
    );
  }

  loadEntreprises() {
    this.planifierFormationService.getEntreprises().subscribe(
      (data) => {
        this.entreprises = data;
      },
      (error) => {
        console.error('Error fetching entreprises:', error);
      }
    );
  }

  onSubmit() {
    this.planifierFormationService.planifierFormation(
      this.selectedFormation,
      this.selectedFormateur,
      this.selectedEntreprise,
      this.dateDebut,
      this.dateFin
    ).subscribe(
      (response) => {
        console.log('Planification successful:', response);
        // You can add additional logic here if needed
      },
      (error) => {
        console.error('Error planning formation:', error);
      }
    );
  }
 // planifier-formation.component.ts


 loadPlanifications() {
  this.planifierFormationService.getPlannedFormations().subscribe(
    (data) => {
      this.planifications = data;
      console.log('Planifications:', this.planifications);
    },
    (error) => {
      console.error('Error fetching planifications:', error);
    }
  );
}

}
