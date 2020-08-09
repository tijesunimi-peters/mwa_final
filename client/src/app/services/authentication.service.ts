import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private token: string;

  constructor() {
    this.reloadToken();
  }

  reloadToken() {
    this.token = localStorage.getItem("authToken");
  }

  saveToken() {
    // save token when user is authenticated from the api
  }

  isAuthenticated() {
    return of(this.token).pipe(
      flatMap(token => of(!!token))
    );
  }
}
