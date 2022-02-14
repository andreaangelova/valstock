import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  albums: Album[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppStore>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscriptions.push(
      this.store.select('albums').subscribe((data) => (this.albums = data))
    );
    this.subscriptions.push(
      this.route.params.subscribe((param) => {
        let id = Number(param['id']);
        this.getAlbum(id);
      })
    );
  }

  ngOnInit(): void {}

  getAlbum(id: number) {
    this.album = this.albums[id];
    // TODO: add guard
    if (!this.album) this.router.navigate(['/dashboard']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
