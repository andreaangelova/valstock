import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/core/models';
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
  showSuccessMessage: boolean = false;

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
    const dialogRef = this.dialog.open(AlbumPopupComponent, {
      height: '350px',
      width: '450px',
      data: { selectedItem: this.selectedItem },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        this.showSuccessMessage = true;
        setTimeout(() => (this.showSuccessMessage = false), 2000);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
