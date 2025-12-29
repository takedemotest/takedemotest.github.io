import { createAction, props } from '@ngrx/store';
import { User } from '../../model/model';
export const LOGIN = createAction(
    '[auth]Login',
    props<{ email: string; password: string }>()
)
export const LOGIN_SUCCESS = createAction(
    '[auth]Login Success',
    props<{ user: User }>()
)
export const LOGIN_FAILURE = createAction(
    '[auth]Login Failure',
    props<{ error: any }>()
)
export const LOGOUT = createAction('[auth]Logout');