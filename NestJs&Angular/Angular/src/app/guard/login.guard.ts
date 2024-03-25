import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentication/services/authentification.service';

@Injectable({
    providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
        constructor(private authService: AuthentificationService) { }
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
                return !this.authService.isAuthenticated();
        }

}