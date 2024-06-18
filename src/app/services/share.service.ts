import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { 
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    this.loggedIn.next(isLoggedIn === 'true');
  }
  private loggedIn = new BehaviorSubject<boolean>(false);

  setLoginStatus(status: boolean) {
    this.loggedIn.next(status);
    sessionStorage.setItem('isLoggedIn', status ? 'true' : 'false');
  }

  getLoginStatus() {
    return this.loggedIn.asObservable();
  }
}
