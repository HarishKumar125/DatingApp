import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router){}

  canActivate(): boolean {
    if (this.authService.loggedIn()){
      return true;
    }
    // tslint:disable-next-line: no-unused-expression
    this.route.navigate(['/home']);
    return false;
  }
}
