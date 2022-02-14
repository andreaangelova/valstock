import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public show = new BehaviorSubject<boolean>(false);

  constructor() { }

  showSpinner() {
    this.show.next(true);
  }

  hideSpinner() {
    this.show.next(false);
  }
}
