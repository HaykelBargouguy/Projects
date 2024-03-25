import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }
  
  post<T>(url: string, data: T): Observable<any> {
    return this.http.post(url, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
