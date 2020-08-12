import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, from } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { Constants } from '../constants';

@Injectable()
export class AuthenticationService {
  private token: string;
  private signinSubject$ = new Subject();
  private authEvent = new EventEmitter();
   myStorage = window.localStorage;

  get signinSubject() {
    return this.signinSubject$;
  }

  get localStorage(){
    return this.myStorage;
  }

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("token");
    this.reloadToken();
    this.setupSignInSubject();
  }

  setupSignInSubject() {
    return this.signinSubject$.asObservable().pipe(
      flatMap((user) =>
        from(this.http.post(Constants.SIGNIN_URL, JSON.stringify(user)))
      ),
      flatMap((response: {status: number, data: any}) => {
        if(response.data) {
          this.saveToken(response.data.token);
          this.myStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return of(response);
      })
    );
  }

  reloadToken() {
    return from(this.isAuthenticated()).pipe(
      flatMap(isAuth => {
        this.token = localStorage.getItem('authToken');
        this.authEvent.next(isAuth);
        return of(isAuth);
      })
    );
  }

  saveToken(token) {
    this.token = JSON.stringify({token});
    localStorage.setItem("authToken", this.token);
    this.reloadToken();
  }

  logout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("cart");
    localStorage.removeItem("user");
    this.reloadToken().subscribe(result => console.log(result));
  }

  get tokenValue() {
    return this.token ? JSON.parse(this.token).token : null;
  }

  get event() {
    return this.authEvent;
  }

  get user() {
    return JSON.parse(localStorage.getItem("user")) || {};
  }

  get role() {
    return (JSON.parse(localStorage.getItem("user")) || {}).role;
  }

  isAuthenticated() {
    return of(this.token).pipe(
      flatMap((token) => {
        try {
          if (!!token && JSON.parse(token).token) {
            console.log('Authenticated');
            return of(!!token);
          } else throw new Error('Not Authenticated');
        } catch (e) {
          console.log('Not Authenticated...');
          return of(false);
        }
      })
    );
  }
}
