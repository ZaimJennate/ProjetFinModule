import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageformateur',
  templateUrl: './pageformateur.component.html',
  styleUrls: ['./pageformateur.component.css']
})
export class PageformateurComponent {
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
}
