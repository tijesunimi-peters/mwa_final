import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, from } from 'rxjs';
import { flatMap } from 'rxjs/operators';
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

  private setupSignInSubject() {
    return this.signinSubject$.asObservable().pipe(
      flatMap((user) =>
        from(this.http.post(Constants.SIGNIN_URL, JSON.stringify(user)))
      )
    );
  }

  reloadToken() {
    from(this.isAuthenticated()).pipe(
      flatMap(isAuth => {
        this.token = localStorage.getItem('authToken');
        this.authEvent.next(isAuth);
        return of(isAuth);
      })
    ).subscribe();
  }

  saveToken(token) {
    // save token when user is authenticated from the api
    localStorage.setItem("authToken", JSON.stringify({token}));
    this.reloadToken();
  }

  logout() {
    localStorage.removeItem("authToken");
    this.reloadToken();
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
