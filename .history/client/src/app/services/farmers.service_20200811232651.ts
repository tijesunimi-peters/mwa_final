import { Constants } from '../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FarmersService {


  constructor(private http: HttpClient) {}

  showFarmers() {
    console.log(Constants.FARMERS_URL)
    return this.http.get(Constants.FARMERS_URL);
  }
}
