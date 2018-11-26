import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, AuthComplete, SetToken } from '../actions/auth.actions';
import { State } from '../reducers/auth.reducer';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {

  @Effect()
  setToken$ = this.actions$.pipe(
    ofType<SetToken>(AuthActionTypes.SetToken),
    map(action => action.payload),
    switchMap((payload) => this.authService.getInfo(payload.token)
      .pipe(
        map(data => new AuthComplete(data))
      )
    )
  );

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private store$: Store<State>,
    private cookieService: CookieService
  ) {
  }
}
