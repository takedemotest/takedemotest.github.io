import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/model';


@Injectable({  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

 login(email: string, password: string) {
  return this.http.post<User>('/api/login', { email, password });
}

//  login(email: string, password: string): Observable<User> {
//     return this.http.post<User>(
//       `${this.API_URL}/login`,
//       { email, password }
//     );
//   }

}