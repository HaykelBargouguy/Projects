import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }
  
  post<T>(url: string, data: T): Observable<any> {
    return this.http.post(url, data);
  }

  get<T>(url: string): Observable<any> {
    return this.http.get(url);
  }

  put<T>(url: string, data: T): Observable<any> {
    return this.http.put(url, data);
  }

  patch<T>(url: string, data: T): Observable<any> {
    return this.http.patch(url, data);
  }

  delete<T>(url: string): Observable<any> {
    return this.http.delete(url);
  }}
