import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  email:any
  password:any
  isAuthenticated :any
  constructor(private router:Router) { }
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    this.email = localStorage.getItem('email');
    this.password = localStorage.getItem('password');

    if ((this.email === 'missa@missa.com')&& (this.password === 'youNeverKnow')) {
      this.isAuthenticated = true ;
    }
    else {
      this.router.navigate(['/']);
    }
    return this.isAuthenticated;
}
}
