import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/core/models/item';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  subscription: Subscription;

  constructor(private itemsService: ItemsService, private router: Router) {
    this.subscription = this.itemsService.items.subscribe((data) => {
      this.items = data;
      if (data.length === 0) this.itemsService.getItems();
    });
  }

  ngOnInit(): void {}

  goToItem(item: Item): void {
    this.router.navigate(['dashboard/item', item.id]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
