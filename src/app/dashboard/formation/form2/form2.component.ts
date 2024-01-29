import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  formation: any = {}; // Assuming you have a Formation model
  selectedCategoryId: number = 0;
  categories: any[] = [];  // Assuming you have a category service to fetch categories

  constructor(
    private formationService: FormationService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // Fetch categories when the component initializes
    this.formationService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  ajouterFormation() {
    // Set the selected category ID to the formation object
    this.formation.categorie_id = this.selectedCategoryId;
  
    // Log the formation object before making the request
    console.log('Formation object:', this.formation);
  
    // Call the service to add the formation
    this.formationService.ajouterFormation(this.formation).subscribe(
      (response) => {
        console.log('Formation added successfully:', response);
        // You can handle success or navigate to another page here
      },
      (error) => {
        console.error('Error adding formation:', error);
        // You can handle errors here
      }
    );
  }
  
  

  
  

  
}

