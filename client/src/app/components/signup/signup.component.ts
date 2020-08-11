import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from './../../services/registration.service';
import { Subscription } from "rxjs"

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

  constructor(
    private registrationService: RegistrationService,
    private foundBuilder: FormBuilder,
    private router: ActivatedRoute
  ) {
    this.registerServiceSub = registrationService.setupRegistrationPipeline().subscribe(this.registerResponse);
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

  registerResponse = (result) => {
    console.log(result);
  }

  onSubmit() {
    this.registrationService.registrationSubject.next(this.signupForm.value);
    console.log(this.signupForm.value);
  }

  ngOnDestroy() {
    this.registerServiceSub.unsubscribe();
  }
}
