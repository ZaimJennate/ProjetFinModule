import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  formation: any = {};
  formationId!: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.formationId = +this.route.snapshot.paramMap.get('id')!;

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
      this.http.post('http://localhost:8080/ajouter', this.formation)
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
    this.router.navigate(['/dashboard/Formation/table']);
  }
}

