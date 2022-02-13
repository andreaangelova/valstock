import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/core/models';
import { ItemsService } from 'src/app/core/services/items.service';
import { MatDialog } from '@angular/material/dialog';
import { AlbumPopupComponent } from './album-popup/album-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  subscription: Subscription;
  showSuccessMessage: boolean = false;

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.subscription = this.itemsService.items.subscribe((data) => {
      this.items = data;
      if (data.length === 0) this.itemsService.getItems();
    });
  }

  ngOnInit(): void {}

  goToItem(item: Item, event: Event): void {
    let elementClicked = event.target as HTMLElement;
    if (elementClicked.tagName.toLowerCase() === 'img') {
      this.itemsService.setSelectedItem(item);
      this.router.navigate(['dashboard/item', item.id]);
    }
  }

  openDialog(selectedItem: Item) {
    const dialogRef = this.dialog.open(AlbumPopupComponent, {
      height: '350px',
      width: '450px',
      data: { selectedItem },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'success') {
        // TODO: create info message service
        this.showSuccessMessage = true;
        setTimeout(() => (this.showSuccessMessage = false), 2000);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
