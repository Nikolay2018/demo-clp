import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetToken = '[Auth] Set token',
  AuthComplete = '[Auth] Auth complete'
}

export class AuthComplete implements Action {
  readonly type = AuthActionTypes.AuthComplete;

  constructor(public payload: any) {
  }
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class SetToken implements Action {
  readonly type = AuthActionTypes.SetToken;

  constructor(public payload: { token: string }) {
  }
}

export type AuthActions = LoadAuths | SetToken | AuthComplete;
