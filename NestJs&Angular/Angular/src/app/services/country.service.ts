import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { countriesApiUrl } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = countriesApiUrl;

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(countries => 
        countries.filter(country => country.name.common !== 'Israel')
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
      )
    );
  }
}
