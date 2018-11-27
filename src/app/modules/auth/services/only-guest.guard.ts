import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isLogged } from '../state/reducers/index.reducer';
import { State } from '../../../reducers';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlyGuestGuard implements CanActivate {

  constructor(private store$: Store<State>, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Promise((resolve) => {
      this.store$.pipe(
        select(isLogged),
        filter(loggedIn => loggedIn !== null),
        take(1),
        map(loggedIn => {
          if (loggedIn) {
            this.router.navigate(['/dashboard']);
          } else {
            return resolve(true);
          }
        })
      ).subscribe();
    });

  }

}
