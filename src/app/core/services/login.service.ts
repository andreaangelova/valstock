import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loggedIn = new BehaviorSubject<boolean>(false);
  constructor() {}

  logIn(user: Object) {
    this.loggedIn.next(true);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut() {
    this.loggedIn.next(false);
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    let loggedIn = localStorage.getItem('user') ? true : false;
    this.loggedIn.next(loggedIn);
    return loggedIn;
  }
}
