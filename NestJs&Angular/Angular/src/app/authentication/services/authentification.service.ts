import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../../config/config';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient,

  ) { }
  login( email: string, password: string){
    return this.http.post<any>(ApiUrl.login, {"email":email,  "password":password} )
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      if (decodedToken && decodedToken.role && decodedToken.role === 'admin') {
        return true;
      }
    }
    return false; 
  }
  isUser(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      if (decodedToken && decodedToken.role && decodedToken.role === 'user') {
        return true;
      }
    }
    return false; 
  }

}

