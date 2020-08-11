import { Constants } from './../constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profileUrl: string = Constants.SIGNUP_URL;

  constructor(private http: HttpClient) { }

  viewProfile(){
   return this.http.get<any>(this._profileUrl)
  }

}
