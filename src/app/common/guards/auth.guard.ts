import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService} from './../services/auth.service';
import { NotifyService } from './../services/notify.service';
import { tap, take, map } from 'rxjs/operators'


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private notify: NotifyService) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      return this.auth.user$.pipe(
          
           take(1),
           map(user => !!(user && user.campaignId==document.location.hostname)
           ,console.log(window.location.hostname) ),
           tap(loggedIn => {
            if (!loggedIn) {
              this.notify.update('You must be logged in and have a catch phrase!', 'error')
              this.router.navigate(['/login']);
            }
            }
      )
      )
    }

}