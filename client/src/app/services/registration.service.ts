import { Injectable } from '@angular/core';
import { Subject, from , of} from 'rxjs';
import { flatMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../constants';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable()
export class RegistrationService {
  register$ = new Subject();
  user:any;
  myStorage = window.localStorage;
  verify$ = new Subject();

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
  }

  get registrationSubject() {
    return this.register$;
  }

  getLocalStorage(){
    return this.myStorage;
  }
  
  get verifySubject() {
    return this.verify$;
  }

  verifyEmail(email: string) {
    return this.http.post(Constants.VERIFY_EMAIL_URL, { email })
  }

  verifyUsername(username: string) {
    return this.http.post(Constants.VERIFY_USERNAME_URL, { username })
  }

  verifyToken(token: string) {
    return this.http.post(Constants.VERIFY_TOKEN_URL, { token })
  }

  setupRegistrationPipeline() {

    return this.register$.asObservable().pipe(
      flatMap((user) => {
        return from(this.http.post(Constants.SIGNUP_URL, user))
      })
    );
    
  }
}
