import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiUrl = 'http://localhost:8080'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  ajouterFormation(formation: any): Observable<any> {
    const addFormationUrl = `${this.apiUrl}/ajouter`;
    return this.http.post(addFormationUrl, formation);
  }

  getCategories(): Observable<any[]> {
    const getCategoriesUrl = `${this.apiUrl}/affichercategorie`;
    return this.http.get<any[]>(getCategoriesUrl);
  }
}
