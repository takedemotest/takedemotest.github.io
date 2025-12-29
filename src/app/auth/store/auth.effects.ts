import { Injectable, inject} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './auth.actions';
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
          map(user =>
            LOGIN_SUCCESS({ user })
          ),
          catchError(error =>
            of(LOGIN_FAILURE({ error }))
          )
        )
      )
    )
  );
  LOGIN_SUCCESS$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LOGIN_SUCCESS),
        tap(() => {
        console.log('Login successful, navigating to dashboard...');
        this.router.navigate(['/dashboard'], 
        { skipLocationChange: true });
        })
      ),
    { dispatch: false }
  );

  LOGIN_FAILURE$ = createEffect(
    ()=>
      this.actions$.pipe(
        ofType(LOGIN_FAILURE),
        tap(({ error }) => {
          console.error('Login failed:', error);
          // Optionally, show a notification to the user
        } )
      )
  )

}
