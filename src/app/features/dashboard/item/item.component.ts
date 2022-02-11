import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/core/models/item';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less'],
})
export class ItemComponent implements OnInit {
  selectedItem: Item | null;
  subscription: Subscription;

  constructor(private itemService: ItemsService, private router: Router) {
    this.subscription = this.itemService.selectedItem.subscribe((item) => {
      this.selectedItem = item;
      // TODO: add guard
      if (!item) this.router.navigate(['dashboard']);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
