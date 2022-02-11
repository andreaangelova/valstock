import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  baseUrl: string = 'https://picsum.photos/200';
  numberOfItems: number = 12;
  public items = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {}

  async getItems() {
    let imgApiCalls = [];
    let itemsTemp: string[] = [];
    for (let i = 1; i <= this.numberOfItems; i++) {
      let url = this.baseUrl + this.getUrlSuffix(i);
      imgApiCalls.push(this.http.get(url, { responseType: 'blob' }));
    }

    forkJoin(imgApiCalls).subscribe(async (results) => {
      for (const blob of results) {
        let itemUrl = await this.convertBlobToUrl(blob);
        itemsTemp.push(itemUrl);
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
