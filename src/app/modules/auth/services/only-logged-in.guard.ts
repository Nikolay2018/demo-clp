import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { isLogged } from '../state/reducers/index.reducer';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInGuard implements CanLoad {

  constructor(private store$: Store<State>, private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.store$.pipe(
      select(isLogged),
      take(1),
      switchMap(data => {
        console.log(data);
        if (!data) {
          this.router.navigate(['']);
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }

}
