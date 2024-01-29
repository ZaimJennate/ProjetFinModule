import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablecategorie',
  templateUrl: './tablecategorie.component.html',
  styleUrls: ['./tablecategorie.component.css']
})
export class TablecategorieComponent {
  categories: any[] = [];
  newCategory: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    this.fetchCategorie();
  }

  fetchCategorie() {
    this.http.get('http://localhost:8080/categorie')
      .subscribe((data: any) => {
        this.categories = data;
      });
  }

  deleteCategorie(id: number) {
    if (confirm('Are you sure you want to delete this formation?')) {
        this.http.delete(`http://localhost:8080/supprimercategorie/${id}`)
            .subscribe(() => {
                console.log('Formateur deleted successfully');
                // Refresh the window after deletion
                window.location.reload();
                this.showNotification('Categorie Delete successfully');
            });
    }
}

editCategorie(id: number) {
  // Navigate to the edit form with the specified formateur ID
  this.router.navigate(['Categorie', id]);
}

addCategorie(newCategory: string) {
  const categoryData = { nomCategorie: this.newCategory };

  this.http.post('http://localhost:8080/ajoutercategorie', categoryData)
    .subscribe(() => {
      console.log('Category added successfully');
      // Refresh the window after addition
      window.location.reload();
      this.showNotification('Categorie added successfully');
      
    });
}

private showNotification(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  });
}
 
}
