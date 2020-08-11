import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../constants';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable()
export class RegistrationService {
  register$ = new Subject();
  user:any;
  myStorage = window.localStorage;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    // this.setupRegistrationPipeline();
  }

  get registrationSubject() {
    return this.register$;
  }

  getLocalStorage(){
    return this.myStorage;
  }

  setupRegistrationPipeline() {

    return this.register$.asObservable().pipe(
      flatMap((user) => {
        this.user=user
        return from(this.http.post(Constants.SIGNUP_URL, user)).pipe(
          map((response: any) => {
            this.authService.saveToken(response.data);
            console.log(response)
            if(response.status==200){
              this.myStorage.setItem('user',this.user.role);
              // console.log(this.myStorage.getItem('user'));
            }
            // var values=JSON.parse(this.myStorage.getItem('user').pip
            // console.log(values.role);
            console.log('dfg')
            return response;
          })
        );
      })
    );
    
  }
}
