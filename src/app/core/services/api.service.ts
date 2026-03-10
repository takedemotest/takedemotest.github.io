import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task, User } from '../../model/model';
import { environment } from '../../../environments/environments';

@Injectable({  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}



private BASE_URL = `${environment.apiUrl}/auth`;

 login(email: string, password: string): Observable<User> {
    return this.http.post<User>(
      `${this.BASE_URL}/login`,
      { email, password }
    );
  }

async fechtData(path:string){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

}

//rxjs practice
taskList():Observable<Task[]>{
  return this.http.get<Task[]>("https://jsonplaceholder.typicode.com/todos")
}

}