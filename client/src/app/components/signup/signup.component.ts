import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { RegistrationService } from './../../services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [RegistrationService],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  role = 'customer';

  constructor(
    private registrationService: RegistrationService,
    private foundBuilder: FormBuilder,
    private router: ActivatedRoute
  ) {
    router.queryParams.subscribe((x) => (x.type ? (this.role = x.type) : null));
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signupForm = this.foundBuilder.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
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

  onSubmit() {
    console.log(this.signupForm.value.username);
    const newUser = {
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      city: this.signupForm.value.city,
      zipcode: this.signupForm.value.zipcode,
      state: this.signupForm.value.state,
      role: this.signupForm.value.role,
    };

    this.registrationService.registrationSubject.next(newUser);
  }
}
