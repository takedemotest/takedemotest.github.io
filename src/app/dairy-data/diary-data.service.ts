import { Injectable, signal } from '@angular/core';
import { DiaryData, DUMMY_DAIRY_DATA } from './diary-data.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryDataService {

 private readonly genericDataSubject = new BehaviorSubject<DiaryData[]>(DUMMY_DAIRY_DATA)
 readonly genericData$:Observable<DiaryData[]> = this.genericDataSubject.asObservable()

 addCow(user:DiaryData){
   const data = this.genericDataSubject.getValue();
   const setData = [...data, user]
   this.genericDataSubject.next(setData);
   localStorage.setItem('genericData', JSON.stringify(setData));
 }
}
