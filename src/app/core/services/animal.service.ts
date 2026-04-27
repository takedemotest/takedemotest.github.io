import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private BASE_URL = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

   getAnimals(){
    return this.http.get(`${this.BASE_URL}/animals`)
   }

   createAnimal(animalData: any){
    return this.http.post(`${this.BASE_URL}/animals`, animalData)
   }

   updateAnimal(id: string, animalData: any){
    return this.http.put(`${this.BASE_URL}/animals/${id}`, animalData)
   }

   deleteAnimal(id: string){
    return this.http.delete(`${this.BASE_URL}/animals/${id}`)
   }
}
