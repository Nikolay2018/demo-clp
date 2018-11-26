import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log(`store: ${action.type}`, { action, prevState: state });
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
