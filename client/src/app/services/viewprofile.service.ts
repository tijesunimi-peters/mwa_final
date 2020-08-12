import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewprofileService {

  private _profileUrl: string = "http://localhost:3000/api/v1/users/";

  constructor(private http: HttpClient) { }

  viewProfile(){
   return this.http.get<any>(this._profileUrl)
  }

 

}
