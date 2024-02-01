import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../categorie/categorie.model';


@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://localhost:8080';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiUrl}/showcategories`);
  }

  addFormation(formationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ajouterformation`, formationData);
  }
}
