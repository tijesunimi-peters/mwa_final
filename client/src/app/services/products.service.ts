import { Constants } from '../constants';
import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  myStorage = window.localStorage;
  products = [];
  // data: any;
  getproducts(): any {
    return this.http.get(Constants.PRODUCTS_URL);
  }
  constructor(private http: HttpClient) {}
  addProduct(product) {
    
    this.products.push(product);

    this.myStorage.setItem('products', JSON.stringify(this.products));
  }
}
