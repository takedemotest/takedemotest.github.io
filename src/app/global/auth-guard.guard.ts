import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from './store/auth/auth.selectors';
import { map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store:Store) {}

  canActivate() {
    return this.store.select(selectIsLoggedIn).pipe(
      take(1),
     map(isLoggedIn =>
      isLoggedIn
        ? true
        : this.router.createUrlTree(['/auth'])
    )
    )
  }
}
