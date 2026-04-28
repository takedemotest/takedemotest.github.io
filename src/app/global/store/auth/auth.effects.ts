import { Injectable, inject} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_SUCCESS } from './auth.actions';
import { Router } from '@angular/router';
import * as AuthActions from '../auth/auth.actions'
@Injectable()
export class AuthEffects {
    private actions$= inject(Actions)
    private api= inject(ApiService) 
  
    constructor(private router: Router) {}

  register$ = createEffect(()=>
    this.actions$.pipe(
      ofType(REGISTER),
      mergeMap(action =>
        this.api.register(action.name, action.email, action.password).pipe(
          map(response=> AuthActions.REGISTER_SUCCESS({user:response})),
          catchError(error=>of(AuthActions.REGISTER_FAILED({error})))
        )
      ),
      tap(()=>{
        console.log('Registration successful, navigating to login...');
        this.router.navigate(['/auth/login']);
      })
    )
  )
  
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN),
      switchMap(action =>
        this.api.login(action.email, action.password).pipe(
         map((response: any) => {
          return LOGIN_SUCCESS({ 
            user: {
              id: response.id,
              name: response.name,
              email: response.email
              },
              token:response.token
          });
        }),
          catchError(error =>
            of(LOGIN_FAILURE({ error }))
          )
        )
      ),
    ),
    {dispatch:true}
  );
  LOGIN_SUCCESS$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LOGIN_SUCCESS),
        tap(({user}) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false }
  );

  LOGIN_FAILURE$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(LOGIN_FAILURE),
        tap(() => {
          alert('Invalid credentials')
        } )
      ),
      {dispatch:false}
  );

  LOGOUT$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(LOGOUT),
        tap(()=>{
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login']);
        })
      ),
      {dispatch:false}
  )

}
