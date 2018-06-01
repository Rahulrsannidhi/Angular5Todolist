import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
 private carGoals =  new BehaviorSubject<any>(['The initial goal','Another silly goal']);
 carGoal  = this.carGoals.asObservable();


 changeCarGoal(carGoal){
   this.carGoals.next(carGoal);
 }

}
