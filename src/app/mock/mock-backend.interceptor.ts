import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // LOGIN API
    if (req.url.endsWith('/api/login') && req.method === 'POST') {
      const { email, password } = req.body;

      if (email === 'admin@test.com' && password === '1234') {
        return of(
          new HttpResponse({
            status: 200,
            body: {
              token: 'dummy-jwt-token',
              user: { email, name: 'Admin' }
            }
          })
        ).pipe(delay(500));
      }

      return throwError(() =>
        new HttpErrorResponse({
          status: 401,
          error: 'Invalid credentials'
        })
      );
    }

    // EMPLOYEES API
    if (req.url.endsWith('/api/employees') && req.method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: [
            { id: 1, name: 'Rahul', role: 'Developer' },
            { id: 2, name: 'Anita', role: 'Tester' }
          ]
        })
      ).pipe(delay(500));
    }

    return next.handle(req);
  }
}
