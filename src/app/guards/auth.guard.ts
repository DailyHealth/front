import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthenticationService } from '../service/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
  constructor(public auth: AuthenticationService) {}

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
  
}
