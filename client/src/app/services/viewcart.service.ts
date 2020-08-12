
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ViewcartService {

  private _cartUrl: string = "http://localhost:3000/client/model/CartItem.js";

  constructor(private http: HttpClient) { }

  viewcart(){
   return this.http.get<any>(this._cartUrl)
  }

}
