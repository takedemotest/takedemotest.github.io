import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '../../../model/model';

/**
 * AUTH STATE SHAPE
 */
export interface AuthState {
  user: User | null;
  loading: boolean;
  error: any;
  token: string | null;
  isLoggedIn: boolean;
}

/**
 * INITIAL STATE
 */
export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

/**
 * AUTH REDUCER
 */
export const authReducer = createReducer(
  initialState,

  // LOGIN
  on(AuthActions.LOGIN, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // LOGIN SUCCESS
  on(AuthActions.LOGIN_SUCCESS, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    token: 'dummy-token',
    isLoggedIn: true,
  })),

  // LOGIN FAILURE
  on(AuthActions.LOGIN_FAILURE, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    isLoggedIn: false,
  })),

  // LOGOUT
  on(AuthActions.LOGOUT, () => initialState)
);

