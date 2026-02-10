import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { addNewUser } from './add-user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsermodelService {

  constructor(private http:HttpClient) { }

  private API_URL = `https://jsonplaceholder.typicode.com/users`;

  private readonly userSubject = new BehaviorSubject<addNewUser[]>([]);
  readonly users$: Observable<addNewUser[]>=this.userSubject.asObservable();

  addUser(user:addNewUser){
    const users = this.userSubject.getValue();
    this.userSubject.next([...users, user]);

  }

  getUserCount():Observable<number>{
    return this.users$.pipe(
      map(users => users.length)
    )
  }

 
  //fake api testing 
  getAllUsers():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL)
  }
  searchUser(result: string):Observable<any[]>{
    return this.http.get<any[]>(
      `${this.API_URL}?q=${result}`
    )
  };

}
