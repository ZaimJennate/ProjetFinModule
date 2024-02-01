// organization.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
    private baseUrl = 'http://localhost:8080'; // Replace with your Spring Boot backend URL
  
    constructor(private http: HttpClient) { }
  
    checkOrganizationUrlExists(id: string): Observable<boolean> {
      return this.http.get<boolean>(`${this.baseUrl}/getEntrepriseById/${id}`)
        .pipe(
          map((exists: boolean) => exists),
          catchError(this.handleError)
        );
    }
  
    private handleError(error: HttpErrorResponse): Observable<never> {
      let errorMessage = 'An error occurred';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }