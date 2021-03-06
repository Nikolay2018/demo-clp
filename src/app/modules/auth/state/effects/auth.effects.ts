import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, AuthComplete, AuthLogout, SetToken } from '../actions/auth.actions';
import { State } from '../reducers/auth.reducer';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  setToken$ = this.actions$.pipe(
    ofType<SetToken>(AuthActionTypes.SetToken),
    map(action => action.payload),
    switchMap((payload) => this.authService.getInfo(payload.token)
      .pipe(
        map((data: any) => {
          if (data.status === 403) {
            return new AuthLogout();
          } else {
            return new AuthComplete(data);
          }
        })
      )
    )
  );

  @Effect({ dispatch: false })
  logOut$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthLogout),
    map(action => {
      this.cookieService.deleteAll();
      this.router.navigate(['']);
    })
  );

  constructor(
    private router: Router,
    private authService: AuthService,
    private actions$: Actions,
    private store$: Store<State>,
    private cookieService: CookieService
  ) {
  }
}
