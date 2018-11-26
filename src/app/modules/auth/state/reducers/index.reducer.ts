import { createFeatureSelector, createSelector } from '@ngrx/store';
import { _isLogged } from './auth.reducer';

export const authFeature = createFeatureSelector('auth');

export const isLogged = createSelector(authFeature, _isLogged);
