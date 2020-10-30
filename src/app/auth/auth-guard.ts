import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
     if (this.authService.isAuth()) { //Guarding koşulu
       return true;  //Eğer this.authService.isAuth() true ise, guard erişime izin verecek.
     } else {
       this.router.navigate(['/login']); //Yok değilse, guard /login sayfasına yönlendirme yapacak.
     }

     //Hangi sayfaların guard edileceğine, router içerisinde karar vereceğiz.
  }
}
