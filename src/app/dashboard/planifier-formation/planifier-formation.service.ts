// planifier-formation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanifierFormationService {
  private apiUrl = 'http://localhost:8080'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getFormations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/afficherFormations`);
  }

  getFormateurs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/showForma`);
  }

  getEntreprises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Entre`);
  }

  planifierFormation(
    formationId: string,
    formateurId: string,
    entrepriseId: string,
    dateDebut: string,
    dateFin: string
  ): Observable<any> {
    const requestBody = {
      formation: { id: formationId }, // Assuming 'formation' is a property in PlanifierFormation
      formateur: { id: formateurId }, // Assuming 'formateur' is a property in PlanifierFormation
      entreprise: { id: entrepriseId }, // Assuming 'entreprise' is a property in PlanifierFormation
      dateDebut,
      dateFin
    };
    return this.http.post(`${this.apiUrl}/api/sessions-formations`, requestBody);
  }

  getPlannedFormations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/sessions-formations`);
  }
  
}
