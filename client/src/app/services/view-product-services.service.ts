import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewProductServicesService {
  data:any;
  getproducts():any{
   return this.http.get('http://localhost:3201/api/v1/products')

  
   
   }
  constructor(private http:HttpClient) { }
}
