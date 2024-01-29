import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  formateurs: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchFormateurs();
  }

  fetchFormateurs() {
    this.http.get('http://localhost:8080/showForma')
      .subscribe((data: any) => {
        this.formateurs = data;
      });
  }
  deleteFormateur(id: number) {
    if (confirm('Are you sure you want to delete this formateur?')) {
        this.http.delete(`http://localhost:8080/supprimerForma/${id}`)
            .subscribe(() => {
                console.log('Formateur deleted successfully');
                // Refresh the window after deletion
                window.location.reload();
            });
    }
}

editFormateur(id: number) {
  // Navigate to the edit form with the specified formateur ID
  this.router.navigate(['Dashboard/Formateur/Form', id]);
}

}
