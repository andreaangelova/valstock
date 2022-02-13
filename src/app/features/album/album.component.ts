import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Album, AppStore } from 'src/app/core/models';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.less'],
})
export class AlbumComponent implements OnInit {
  album: Album;
  subscription: Subscription;

  constructor(private store: Store<AppStore>, private router: Router) {
    let id = parseInt(this.router.url.split('/')[2]);
    
    this.subscription = this.store
      .select((store) => store.albums)
      .subscribe((data) => {
        this.album = data[id];
        // TODO: add guard
        if (!this.album) this.router.navigate(['/dashboard']);
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
