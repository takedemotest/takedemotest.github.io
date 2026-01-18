import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/model';


@Injectable({  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

private BASE_URL = 'http://localhost:3000/api/auth';

 login(email: string, password: string): Observable<User> {
    return this.http.post<User>(
      `${this.BASE_URL}/login`,
      { email, password }
    );
  }

async fechtData(path:string){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

}
}