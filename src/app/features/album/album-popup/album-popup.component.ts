import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-popup',
  templateUrl: './album-popup.component.html',
  styleUrls: ['./album-popup.component.less']
})
export class AlbumPopupComponent implements OnInit {

  createNewAlbum = false;
  testAlbums = [{
    name: 'My Album One'
  }, {
    name: 'My Album Two'
  },{
    name: 'My Album Three'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
