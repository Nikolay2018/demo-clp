import { createFeatureSelector, createSelector } from '@ngrx/store';
import { _getUserAvatar, _getUsername, _isLogged } from './auth.reducer';

export const authFeature = createFeatureSelector('auth');

export const isLogged = createSelector(authFeature, _isLogged);
export const getUsername = createSelector(authFeature, _getUsername);
export const getUserAvatar = createSelector(authFeature, _getUserAvatar);
