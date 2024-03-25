import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiUrl } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get(`${ApiUrl.user}/getuser`, { headers: this.createAuthorizationHeader() }).pipe(
      catchError(this.handleError<any>('getUserProfile'))
    );
  }

  updateUserProfile(userData: any): Observable<any> {
    return this.http.post(`${ApiUrl.user}/reset`, userData, { headers: this.createAuthorizationHeader() }).pipe(
      catchError(this.handleError<any>('updateUserProfile'))
    );
  }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // You can return an observable here, for example, an empty observable or one that emits an error.
      return new Observable<T>((observer) => {
        observer.error(error); // Emit the error
        observer.complete(); // Complete the observable
      });
    };
  }
}
