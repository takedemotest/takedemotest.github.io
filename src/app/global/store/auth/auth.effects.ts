import { Injectable, inject} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    private actions$= inject(Actions)
    private api= inject(ApiService) 
  constructor(private router: Router) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOGIN),
      switchMap(action =>
        this.api.login(action.email, action.password).pipe(
         map((response: any) => {
          // ✅ STORE TOKEN
          //localStorage.setItem('token', response.token);

          // ✅ DISPATCH SUCCESS
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
      )
    ),
    {dispatch:true}
  );
  LOGIN_SUCCESS$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LOGIN_SUCCESS),
        tap(() => {
        console.log('Login successful, navigating to dashboard...');
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

  LOGOUT = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(LOGOUT),
        tap(()=>{
          localStorage.removeItem('token');
        this.router.navigate(['/auth']);
        })
      ),
      {dispatch:false}
  )

}
