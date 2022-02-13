import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Album, AppStore, Item } from 'src/app/core/models';
import { createAlbum } from 'src/app/core/store/album.actions';

interface AlbumSelected extends Album {
  selected: boolean;
}
interface DialogData {
  selectedItem: Item;
}
@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.less'],
})
export class AlbumPopupComponent implements OnInit {
  createNewAlbum = true;
  albums: AlbumSelected[] = [];
  selectedItem: Item;
  albumName: string = '';
  subscription: Subscription;

  constructor(
    private dialogRef: MatDialogRef<AlbumPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData,
    private store: Store<AppStore>
  ) {
    this.selectedItem = data.selectedItem;

    this.subscription = this.store
      .select((store) => store.albums)
      .subscribe((data) => {
        this.albums = data.map((album) => {
          return { ...album, selected: false };
        });
      });
  }

  ngOnInit(): void {}

  save() {
    this.createNewAlbum ? this.create() : this.addToAlbum();
  }

  create() {
    if (this.albumName) {
      this.store.dispatch(createAlbum(this.albumName));
      this.closeDialog();
    }
  }

  addToAlbum() {
    console.log(this.selectedItem);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
