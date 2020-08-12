import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable()
export class AddProductService {
  constructor(private http: HttpClient) {}

  appProducts(data: any) {
    // this.http.post(Constants.PRODUCTS_URL, data).subscribe();
    console.log(data)
  }
}
