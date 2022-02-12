import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.less'],
})
export class AlbumPopupComponent implements OnInit {
  createNewAlbum = true;
  testAlbums = [
    {
      name: 'My Album One',
    },
    {
      name: 'My Album Two',
    },
    {
      name: 'My Album Three',
    },
  ];

  constructor(private dialogRef: MatDialogRef<AlbumPopupComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
