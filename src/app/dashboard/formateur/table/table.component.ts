import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  formateurs: any[] = [];

  constructor(private http: HttpClient) { }

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
