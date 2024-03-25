import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { ApiUrl } from '../config/config';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class DahsboardserviceService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}


  getUserProfile(): Observable<any> {
    return this.http.get(`${ApiUrl.user}/getuser`, { headers: this.createAuthorizationHeader() }).pipe(
      catchError(this.handleError<any>('getUserProfile'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return new Observable<T>((observer) => {
        observer.error(error); // Emit the error
        observer.complete(); // Complete the observable
      });
    };
  }

  private createAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }
  getUsersWithTotalScores(): Observable<any[]> {
    return this.getUsers().pipe(
      map(users => users.map(user => this.getTotalScore(user.id).pipe(
        map(score => ({ ...user, totalScore: score }))
      ))),
      switchMap(observables => forkJoin(observables))
    );
  }

  private getUsers(): Observable<any[]> {
    const headers = this.createAuthHeaders();
    return this.http.get<any[]>(ApiUrl.user, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]);
      })
    );
  }

  private getTotalScore(userId: number): Observable<number> {
    const headers = this.createAuthHeaders();
    return this.http.get<number>(`${ApiUrl.user}/${userId}/totalscore`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching total score:', error);
        return of(0);
      })
    );
  }

  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}