import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Album } from 'src/app/core/models/album.model';
import { AppStore } from 'src/app/core/models/store.model';
import { createAlbum } from 'src/app/core/store/album.actions';

@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.less'],
})
export class AlbumPopupComponent implements OnInit {
  createNewAlbum = true;
  albums: Album[] = [];
  albumName: string = '';
  subscription: Subscription;

  constructor(
    private dialogRef: MatDialogRef<AlbumPopupComponent>,
    private store: Store<AppStore>
  ) {
    this.subscription = this.store
      .select((store) => store.albums)
      .subscribe((data) => (this.albums = data));
  }

  ngOnInit(): void {}

  create() {
    this.store.dispatch(createAlbum(this.albumName));
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
