import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  loggedIn = false;
  subscription: Subscription;

  constructor(private loginService: LoginService) {
    this.subscription = this.loginService.loggedIn.subscribe(
      (data) => (this.loggedIn = data)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
