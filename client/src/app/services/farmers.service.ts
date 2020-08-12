import { Constants } from '../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FarmersService {
  private _farmersUrl: string = Constants.FARMERS_URL;

  constructor(private http: HttpClient) {}

  showFarmers(sort = 1) {
    return this.http.get<any>(this._farmersUrl + `?rating=${sort}`);
  }
}
