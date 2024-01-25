import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageformation',
  templateUrl: './pageformation.component.html',
  styleUrls: ['./pageformation.component.css']
})
export class PageformationComponent {
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
 
}
