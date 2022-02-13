import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  baseUrl: string = 'https://picsum.photos';
  numberOfItems: number = 12;
  public items = new BehaviorSubject<Item[]>([]);
  public selectedItem = new BehaviorSubject<Item | null>(null);

  constructor(private http: HttpClient) {}

  setSelectedItem(item: Item) {
    this.selectedItem.next(item);
    if (!item.author) {
      this.http
        .get(`${this.baseUrl}/id/${item.id}/info`)
        .subscribe((data: any) => {
          item.author = data.author;
          this.selectedItem.next(item);
        });
    }
  }

  async getItems() {
    let imgApiCalls = [];
    let itemsTemp: Item[] = [];
    for (let i = 1; i <= this.numberOfItems; i++) {
      let url = this.baseUrl + '/200' + this.getUrlSuffix(i);
      imgApiCalls.push(
        this.http.get(url, { observe: 'response', responseType: 'blob' })
      );
    }

    forkJoin(imgApiCalls).subscribe(async (results) => {
      for (const data of results) {
        let blob = data.body as Blob;
        let url = await this.convertBlobToUrl(blob);
        let id = data.headers.get('picsum-id') as string;
        itemsTemp.push({ id, url });
      }
      this.items.next(itemsTemp);
    });
  }

  getUrlSuffix(index: number) {
    // ordering the images
    let rowCount = this.numberOfItems / 3;
    // change the order if it is the centered colum
    if (index > rowCount && index <= rowCount * 2) {
      return index % 2 === 0 ? '' : '/300';
    }
    return index % 2 !== 0 ? '' : '/300';
  }

  convertBlobToUrl(blob: Blob): Promise<string> {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(blob); // converts the blob to base64 and calls onload

      reader.onload = () => {
        let dataUrl = reader.result as string;
        resolve(dataUrl);
      };
    });
  }
}
