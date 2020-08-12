import { Constants } from '../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FarmersService {


  constructor(private http: HttpClient) {}

  showFarmers() {
    return this.http.get(Constants.FARMERS_URL);
  }
}
