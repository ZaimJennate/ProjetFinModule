import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

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


  getUserCart(): Observable<any> {
    const userId = localStorage.getItem('currentUser');
  
    if (userId) {
      return this.http.get(`${this.baseUrl}/user/${userId}/cart`).pipe(
        tap(data => console.log('User Cart Data:', data)),
        catchError(error => throwError(error))
      );
    } else {
      throw new Error('User ID not available');
    }
  }
  
}
