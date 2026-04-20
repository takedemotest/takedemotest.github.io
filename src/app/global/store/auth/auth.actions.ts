import { createAction, props } from '@ngrx/store';
import { User } from '../../../model/model';

//login user
export const LOGIN = createAction(
    '[auth]Login',
    props<{ email: string; password: string }>()
)
export const LOGIN_SUCCESS = createAction(
    '[auth]Login Success',
    props<{ user: User; token: string }>()
)
export const LOGIN_FAILURE = createAction(
    '[auth]Login Failure',
    props<{ error: any }>()
)

//register user
export const REGISTER = createAction(
    '[auth] Register',
    props<{ name:string; email:string; password:string }>()
)
export const REGISTER_SUCCESS = createAction(
    '[auth] register success',
    props<{user: User;}>()
)
export const REGISTER_FAILED = createAction(
    '[auth] register failed',
    props<{error:any}>()
)

//reset user
export const RESET = createAction(
    '[auth] Reset',
    props<{email:string}>()
)

//logout
export const LOGOUT = createAction('[auth]Logout');