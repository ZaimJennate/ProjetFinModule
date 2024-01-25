import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

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

}
