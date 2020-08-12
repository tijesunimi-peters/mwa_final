import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private registrationService: RegistrationService
  ) {}

  getUserRole() {
    return this.registrationService.getLocalStorage().getItem('user');
  }

  getOrdersForFarmers(id: string): any {
    return this.http.get(Constants.FARMERS_ORDERS_URL + `/${id}`);
  }

  getOrdersForCustomers(id:string): any{
    return this.http.get(Constants.ORDERS_URL + `/${id}`);
  }
}
