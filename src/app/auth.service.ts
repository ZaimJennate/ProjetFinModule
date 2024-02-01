import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { Formation } from './welcome/pageformation/formation.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) {}
  private organizationUrlSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  organizationUrl: Observable<string> = this.organizationUrlSubject.asObservable();

register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registration`, user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 200) {
            // Handle the success response
            return of('Registration successful');
          } else {
            // Handle other error cases
            return throwError('Registration failed');
          }
        })
      );
  }
// Update loginUser method in user.service.ts
loginUser(credentials: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('http://localhost:8080/login', credentials, { headers });
}

getUserDetails(): Observable<string> {
  const username = localStorage.getItem('currentUser');

  if (username) {
    return this.http.get<string>(`${this.baseUrl}/user/${username}`);
  } else {
    return throwError('Username not available');
  }
}
getCurrentUserId(): Observable<string> {
  const username = localStorage.getItem('currentUser');

  if (username) {
    return this.http.get<{ id: string }>(`${this.baseUrl}/user/${username}`).pipe(
      map(response => response.id),
      catchError(error => throwError('Error extracting user ID'))
    );
  } else {
    return throwError('Username not available');
  }
}


  addToCart(userId: string, formationId: string): Observable<any> {
    const url = `${this.baseUrl}/add/${userId}/formation/${formationId}`;
    return this.http.post(url, {});
  }

  getPlannedFormationsForFormateur(formateurId: number): Observable<any[]> {
    const url = `${this.baseUrl}/formateur/${formateurId}`; // Modify the endpoint based on your API

    return this.http.get<any[]>(url);
  }
  // Add this method to your AuthService
// Add this method to your AuthService
getFormateurs(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/users/formateurs`); // Adjust the endpoint based on your API
}






  getUserCartFormations(userId: number): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.baseUrl}/user/${userId}/cart/formations`);
  }
  setOrganizationUrl(url: string): void {
    this.organizationUrlSubject.next(url);
  }

  // auth.service.ts

checkEmailExists(email: string): Observable<any> {
  const url = `${this.baseUrl}/checkEmailExists/${email}`;

  return this.http.get<any>(url);
}

  
}
