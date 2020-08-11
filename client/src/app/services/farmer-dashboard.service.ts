import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class FarmerDashboardService {
  constructor(private http: HttpClient) {}

  getOrdersForFarmers(id:string): any {
    return this.http.get(Constants.FARMERS_ORDERS_URL+`/${id}`)
  }
}
