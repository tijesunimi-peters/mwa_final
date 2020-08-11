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

  get signinSubject() {
    return this.signinSubject$;
  }

  constructor(private http: HttpClient) {
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
          this.saveToken(response.data);
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
    this.reloadToken().subscribe(result => console.log(result));
  }

  get tokenValue() {
    return this.token;
  }

  get event() {
    return this.authEvent;
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
