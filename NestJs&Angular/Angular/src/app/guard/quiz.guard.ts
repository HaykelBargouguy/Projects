import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentication/services/authentification.service';
import { QuizComponent } from '../quizpage/quiz/quiz.component';

@Injectable({
  providedIn: 'root',
})
export class QuizGuard implements CanActivate, CanDeactivate<QuizComponent> {
  constructor(private authService: AuthentificationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return !!this.authService.isAuthenticated();
  }

  canDeactivate(
        component: QuizComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
      ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (component.hasQuizBeenSubmitted){
          return true;
        }
        if (confirm('Are you sure you want to leave this page? Your quiz will not be submitted.')) {
            return true;
        }
        return false;
      }
}

