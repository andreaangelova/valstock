import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Album, AppStore } from '../models';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  loggedIn = false;
  subscriptions: Subscription[] = [];
  albums: Album[] = [];
  showDropdown = false;

  constructor(
    private loginService: LoginService,
    private store: Store<AppStore>,
    private router: Router
  ) {
    this.subscriptions.push(
      this.loginService.loggedIn.subscribe((data) => (this.loggedIn = data))
    );

    this.subscriptions.push(
      this.store.select('albums').subscribe((data) => (this.albums = data))
    );
  }

  @HostListener('window:click', ['$event.target'])
  onClick(target: HTMLElement) {
    if (target.id !== 'album-dropdown') this.showDropdown = false;
  }

  ngOnInit(): void {}

  goToAlbum(index: number) {
    this.router.navigate(['/album', index]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
