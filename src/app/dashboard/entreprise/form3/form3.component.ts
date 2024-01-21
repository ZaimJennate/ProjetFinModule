import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  entreprise: any = {};
  entrepriseId!: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.entrepriseId = +this.route.snapshot.paramMap.get('id')!;

    if (this.entrepriseId) {
      this.http.get(`http://localhost:8080/getEntrepriseById/${this.entrepriseId}`)
        .subscribe((data: any) => this.entreprise = data);
    }
  }

  addEntreprise() {
    if (this.entrepriseId) {
      this.http.put(`http://localhost:8080/modifierEntreprise/${this.entrepriseId}`, this.entreprise)
        .subscribe(response => {
          console.log(response);
          this.showNotification('Entreprise updated successfully');
          this.redirectToTable();
        });
    } else {
      this.http.post('http://localhost:8080/ajouteEntre', this.entreprise)
        .subscribe(response => {
          console.log(response);
          this.showNotification('Entreprise added successfully');
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
    this.router.navigate(['/dashboard/Entreprise/table']);
  }
}

