import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FarmerServicesService {

  private _farmersUrl: string = "http://localhost:3000/api/v1/farmers"
  
  constructor(private http : HttpClient) { }

  showFarmers(){
    return this.http.get<any>(this._farmersUrl)

  }
}
