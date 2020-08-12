import { Subscription } from 'rxjs';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errors: string[] = [];
  authServiceSub: Subscription;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.authServiceSub = authService
      .setupSignInSubject()
      .subscribe(this.signinResponse, this.signinError);
  }

  signinError = (response) => {
    console.log(response);
    this.errors = response.error.errors;
  };

  signinResponse = (response) => {
    return this.router.navigate(['dashboard']);
  };

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.signinForm.value)
    this.authService.signinSubject.next(this.signinForm.value);
  }

  ngOnDestroy() {
    this.authServiceSub.unsubscribe();
  }
}
