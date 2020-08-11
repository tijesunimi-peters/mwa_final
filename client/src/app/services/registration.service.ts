import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../constants';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable()
export class RegistrationService {
  register$ = new Subject();

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.setupRegistrationPipeline();
  }

  get registrationSubject() {
    return this.register$;
  }

  setupRegistrationPipeline() {
    this.register$.asObservable().pipe(
      flatMap((user) => {
        return from(this.http.post(Constants.SIGNUP_URL, user)).pipe(
          map((response: any) => {
            this.authService.saveToken(response.data);
          })
        );
      })
    );
  }
}
