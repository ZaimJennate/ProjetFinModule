import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  formations: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchFormateurs();
  }

  fetchFormateurs() {
    this.http.get('http://localhost:8080/afficherFormations')
      .subscribe((data: any) => {
        this.formations = data;
      });
  }
  deleteFormation(id: number) {
    if (confirm('Are you sure you want to delete this formation?')) {
        this.http.delete(`http://localhost:8080/supprimerFormations/${id}`)
            .subscribe(() => {
                console.log('Formateur deleted successfully');
                // Refresh the window after deletion
                window.location.reload();
            });
    }
}

editFormation(id: number) {
  // Navigate to the edit form with the specified formateur ID
  this.router.navigate(['Dashboard/Formation/Form2', id]);
}
}
