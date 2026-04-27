import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task, User } from '../../model/model';
import { environment } from '../../../environments/environments';

@Injectable({  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}



private BASE_URL = `${environment.apiUrl}`;

 login(email: string, password: string): Observable<User> {
    return this.http.post<User>(
      `${this.BASE_URL}/auth/login`,
      { email, password }
    );
  }

  register(name:string, email:string, password:string):Observable<User>{
     return this.http.post<User>(
      `${this.BASE_URL}/auth/register`,
      {name, email, password}
     )
  }

  getDashboardStats(){
    return this.http.get<any>(
      `${this.BASE_URL}/dashboard/stats`
    )
  }

  getAnimals(){
    return this.http.get<any>(
      `${this.BASE_URL}/animals`
    )
  }

  addAnimal(animal:any){
    return this.http.post<any>(
      `${this.BASE_URL}/animals`, animal
    )
  }

  updateAnimal(animal:any){
    return this.http.put<any>(
      `${this.BASE_URL}/${animal._id}`, animal
    )
  }

  deleteAnimal(id:string){
    return this.http.delete<any>(
      `${this.BASE_URL}/${id}`
    )
  }

}