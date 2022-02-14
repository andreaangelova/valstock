import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Album, AppStore } from 'src/app/core/models';
import { removeItemFromAlbum } from 'src/app/core/store/album.actions';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.less'],
})
export class AlbumComponent implements OnInit {
  album: Album;
  albumId: number;
  albums: Album[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppStore>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscriptions.push(
      this.store.select('albums').subscribe((data) => {
        this.albums = data;
        if (this.albumId !== undefined) this.getAlbum();
      })
    );
    this.subscriptions.push(
      this.route.params.subscribe((param) => {
        this.albumId = Number(param['id']);
        this.getAlbum();
      })
    );
  }

  ngOnInit(): void {}

  getAlbum() {
    this.album = this.albums[this.albumId];
    // TODO: add guard
    if (!this.album) this.router.navigate(['/dashboard']);
  }

  removeItem(id: string) {
    // TODO: remove multiple items on save
    this.store.dispatch(
      removeItemFromAlbum({ albumId: this.albumId, itemId: id })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
