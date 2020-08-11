import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from './../../services/registration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [RegistrationService],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  role = 'customer';
  registerServiceSub: Subscription;
  errors: string[] = [];

  constructor(
    private registrationService: RegistrationService,
    private foundBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.registerServiceSub = registrationService
      .setupRegistrationPipeline()
      .subscribe(this.registerResponse);
    route.queryParams.subscribe((x) => (x.type ? (this.role = x.type) : null));
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signupForm = this.foundBuilder.group({
      username: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur',
      }),
      email: new FormControl('', {
        validators: [Validators.email, Validators.required],
        updateOn: 'blur',
      }),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      role: new FormControl(this.role),
    });
  }

  registerResponse = (result) => {
    this.router.navigate(['email-notification']);
  };

  onSubmit() {
    this.registrationService.registrationSubject.next(this.signupForm.value);
  }

  ngOnDestroy() {
    this.registerServiceSub.unsubscribe();
  }
}
