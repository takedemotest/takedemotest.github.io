import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: any) => state.auth;

export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state:AuthState) => state.isLoggedIn
);

export const selectUser = createSelector (
    selectAuthState,
    (state:AuthState) => state.user
);

