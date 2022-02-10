import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  logIn(user: Object) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut() {
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }
}
