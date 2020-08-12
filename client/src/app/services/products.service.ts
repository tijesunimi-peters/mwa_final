import { AuthenticationService } from 'src/app/services/authentication.service';
import { Constants } from '../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  data: any;

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  getproducts(): any {
    return this.http.get(Constants.PRODUCTS_URL);
  }
  getproductwithid(id: string) {
    return this.http.get(Constants.PRODUCTS_URL + '/all/' + id);
  }
  getone(id: String) {
    return this.http.get(Constants.PRODUCTS_URL + '/' + id);
  }

  deleteproductwithid(id: string) {
    return this.http.delete(Constants.PRODUCTS_URL + '/' + id);
  }

  save(product) {
    let formdata = new FormData();

    formdata.append('name', product.name);
    formdata.append('category', product.category);
    formdata.append('description', product.description);
    formdata.append('farmer[_id]', product.farmer._id);
    formdata.append('farmer[name]', product.name);
    formdata.append('farmer[email]', product.email);
    formdata.append('image', product.image);
    formdata.append('price', product.price);

    console.log(product);

    return this.http.post(Constants.PRODUCTS_URL, formdata, { 
      headers: {
        "Authorization": "Bearer " + this.authService.tokenValue
      }
    });
  }
}
