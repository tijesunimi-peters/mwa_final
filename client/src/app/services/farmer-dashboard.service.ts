import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FarmerDashboardService {
  constructor(private http: HttpClient) {}

  getOrdersForFarmers(): any {
    return this.http.get(
      'http://localhost:3201/api/v1/orders/farmers/5f3027e6096326007f7fdb11'
    );
  }
}
