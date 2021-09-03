import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardaGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) { }
  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const cookie = this.cookieService.get('token_access');
    let flag: boolean;

    if (cookie === 'alex123'){
      flag = true;
    }else{
      flag = false;
      this.router.navigate(['/','login']);
    }
    return flag;
  }
  
}
