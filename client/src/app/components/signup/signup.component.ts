import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  user = {
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zipcode: '',
    role: 'customer',
  };
  constructor(private fb: FormBuilder, private router: ActivatedRoute) {
    router.queryParams.subscribe((x) =>
      x.type ? (this.user.role = x.type) : null
    );
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signupForm = this.fb.group({
      username: new FormControl(this.user.username, [Validators.required]),
      email: new FormControl(this.user.email, [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      city: new FormControl(this.user.city, [Validators.required]),
      state: new FormControl(this.user.state, [Validators.required]),
      zipcode: new FormControl(this.user.zipcode, [
        Validators.required,
        Validators.minLength(5),
      ]),
      role: new FormControl(this.user.role),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    console.log(this.user);
  }
}
