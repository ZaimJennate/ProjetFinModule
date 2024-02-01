import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../formation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '../../categorie/categorie.model';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  formation: any = {};
  categories: any= {};
  formationId!: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.formationId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get('http://localhost:8080/affichercategorie')
    .subscribe((data: any) => this.categories = data);

    if (this.formationId) {
      this.http.get(`http://localhost:8080/getFormationById/${this.formationId}`)
        .subscribe((data: any) => this.formation = data);
    }
  }
  addFormation() {
    if (this.formationId) {
      this.http.put(`http://localhost:8080/modifierFormation/${this.formationId}`, this.formation)
        .subscribe(response => {
          console.log(response);
          this.showNotification('Formation updated successfully');
          this.redirectToTable();
        });
    } else {
      this.http.post('http://localhost:8080/ajouterformation', this.formation)
        .subscribe(response => {
          console.log(response);
          this.showNotification('Formation added successfully');
          this.redirectToTable();
        });
    }
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  private redirectToTable(): void {
    this.router.navigate(['/Dashboard/Formation']);
  }

  
}