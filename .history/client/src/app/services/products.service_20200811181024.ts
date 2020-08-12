import { Constants } from '../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  data: any;
  getproducts(): any {
    return this.http.get(Constants.PRODUCTS_URL);
  }
  getproductwithid(id:string){
    return this.http.get(Constants.PRODUCTS_URL+'/'+id);
  }
  deleteproductwithid(id:string){
    return this.http.delete(Constants.PRODUCTS_URL+'/'+id);
  }
  constructor(private http: HttpClient) {}
}
