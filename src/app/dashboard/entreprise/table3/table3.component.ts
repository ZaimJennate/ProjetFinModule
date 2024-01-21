import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component {
  entrepris: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchEntreprise();
  }

  fetchEntreprise() {
    this.http.get('http://localhost:8080/Entre')
      .subscribe((data: any) => {
        this.entrepris = data;
      });
  }

  deleteEntreprise(id: number) {
    if (confirm('Are you sure you want to delete this formateur?')) {
        this.http.delete(`http://localhost:8080/supprimerEntreprise/${id}`)
            .subscribe(() => {
                console.log('Formateur deleted successfully');
                // Refresh the window after deletion
                window.location.reload();
            });
    }
}

editEntreprise(id: number) {
  // Navigate to the edit form with the specified formateur ID
  this.router.navigate(['/dashboard/Entreprise/form', id]);
}

}
