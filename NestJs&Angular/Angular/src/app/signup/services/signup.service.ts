import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../../config/config';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,

  ) { }
  signup( signUpForm : NgForm):Observable<any>{
    return this.http.post<any>(ApiUrl.signup, signUpForm )
  }
}
