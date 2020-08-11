import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ViewProductServicesService {
  data: any;
  getproducts(): any {
    return this.http.get(Constants.PRODUCTS_URL);
  }
  constructor(private http: HttpClient) {}
}
