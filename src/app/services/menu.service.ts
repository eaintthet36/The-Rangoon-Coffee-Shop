import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private itemNumber = new BehaviorSubject<number>(0);
  itemNumber$ = this.itemNumber.asObservable();

  updateItemNumber(itemNumber: number) {
    this.itemNumber.next(itemNumber);
  }

  
}
