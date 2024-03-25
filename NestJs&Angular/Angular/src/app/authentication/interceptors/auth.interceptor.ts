import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthentificationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Check if authenticated and the request method is not 'GET'
    if (this.authService.isAuthenticated() && request.method != 'GET'){
      // Retrieve the token
      const token = localStorage.getItem('token') ?? '';

      // Clone the request and add the Authorization header
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(authReq);
    }

    // If not authenticated, or if it's a GET request, forward the request unchanged
    return next.handle(request);
  }
}