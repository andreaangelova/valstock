import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/core/models/item';
import { ItemsService } from 'src/app/core/services/items.service';
import { AlbumPopupComponent } from '../album-popup/album-popup.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less'],
})
export class ItemComponent implements OnInit {
  selectedItem: Item | null;
  subscription: Subscription;

  constructor(
    private itemService: ItemsService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.subscription = this.itemService.selectedItem.subscribe((item) => {
      this.selectedItem = item;
      // TODO: add guard
      if (!item) this.router.navigate(['dashboard']);
    });
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(AlbumPopupComponent, { height: '350px', width: '450px' });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
