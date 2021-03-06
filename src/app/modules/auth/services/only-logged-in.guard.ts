import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { isLogged } from '../state/reducers/index.reducer';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInGuard implements CanLoad {

  constructor(private store$: Store<State>, private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
      this.store$.pipe(
        select(isLogged),
        filter(loggedIn => loggedIn !== null),
        take(1),
        map(loggedIn => {
          if (loggedIn) {
            resolve(true);
          } else {
            this.router.navigate(['']);
          }
        })
      ).subscribe();
    });

  }

}
