import { AuthenticationService } from 'src/app/services/authentication.service';
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

  addProduct(product) {
    
    this.products.push(product);

    this.myStorage.setItem('products', JSON.stringify(this.products));
  }
  data: any;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  getProducts(): any {
    return this.http.get(Constants.PRODUCTS_URL);
  }

  getFarmerProducts(id: string) {
    return this.http.get(Constants.PRODUCTS_URL + '/all/' + id);
  }
  getProduct(id: String) {
    return this.http.get(Constants.PRODUCTS_URL + '/' + id);
  }

  delete(id: string) {
    return this.http.delete(Constants.PRODUCTS_URL + '/' + id);
  }

  save(product) {
    let formdata = new FormData();

    formdata.append('name', product.name);
    formdata.append('category', product.category);
    formdata.append('description', product.description);
    formdata.append('farmer[_id]', product.farmer._id);
    formdata.append('farmer[name]', product.farmer.username);
    formdata.append('farmer[email]', product.farmer.email);
    if(product.image) {
      formdata.append('image', product.image);
    }
    formdata.append('price', product.price);

    return this.http.post(Constants.PRODUCTS_URL, formdata, {
      headers: {
        "Content-Type": "none"
      }
    });
  }
}
