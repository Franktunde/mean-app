import { Injectable } from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';

import { AuthService } from "../services/auth.service";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor (
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.authService){
            return true
        }else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}