import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  token: string;
  username: string;
  loggedIn: boolean;
}

export const initialState: State = {
  token: null,
  username: null,
  loggedIn: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.SetToken:
      return {
        ...state,
        token: action.payload.token
      };

    case AuthActionTypes.AuthComplete:
      return {
        ...state,
        username: action.payload.username,
        loggedIn: true
      };

    case AuthActionTypes.AuthLogout:
      return {
        ...state,
        loggedIn: false
      };

    default:
      return state;
  }
}

export const _isLogged = (state: State) => state.loggedIn;
export const _getUsername = (state: State) => state.username;
