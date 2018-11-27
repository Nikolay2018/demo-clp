import { createFeatureSelector, createSelector } from '@ngrx/store';
import { _getUsername, _isLogged } from './auth.reducer';

export const authFeature = createFeatureSelector('auth');

export const isLogged = createSelector(authFeature, _isLogged);
export const getUsername = createSelector(authFeature, _getUsername);
