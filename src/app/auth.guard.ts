import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './NSservice/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auths: AuthService, private router: Router, private msalservice: MsalService) { }
  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.auths.currentUser$.pipe(
      take(1),
      map(user => {
        if (user !== null || this.msalservice.instance.getActiveAccount() !== null) {
          return true;
        } else {
          this.router.navigate(['Login'])
          return false;

        }

      })
    );
  }

  mslserviseactive(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.msalservice.instance.getActiveAccount() !== null) {
      return true
    } else {
      this.router.navigate(['Login']);
      return false;
    };
  }

}

