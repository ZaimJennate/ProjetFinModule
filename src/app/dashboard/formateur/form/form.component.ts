import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formateur: any = {};
  formateurId!: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.formateurId = +this.route.snapshot.paramMap.get('id')!;

    if (this.formateurId) {
      this.http.get(`http://localhost:8080/getFormateurById/${this.formateurId}`)
        .subscribe((data: any) => this.formateur = data);
    }
  }

  addFormateur() {
    if (this.formateurId) {
      this.http.put(`http://localhost:8080/modifierForma/${this.formateurId}`, this.formateur)
        .subscribe(response => {
          console.log(response);
          this.showNotification('Formateur updated successfully');
          this.redirectToTable();
        });
    } else {
      this.http.post('http://localhost:8080/ajouterForma', this.formateur)
        .subscribe(response => {
          console.log(response);
          this.showNotification('Formateur added successfully');
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
    this.router.navigate(['/Dashboard/Formateur']);
  }
}
