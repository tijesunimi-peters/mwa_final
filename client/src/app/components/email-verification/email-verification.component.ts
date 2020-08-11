import { RegistrationService } from './../../services/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
})
export class EmailVerificationComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private registerService: RegistrationService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(this.sendTokenForVerification);
  }

  sendTokenForVerification = (params) => {
    this.registerService
      .verifyToken(params.verification_token)
      .subscribe(this.isValid, this.notValid);
  };

  isValid = (response) => {
    this.router.navigate(['app', 'signin']);
  };

  notValid = (http) => {
    this.errors = http.error.errors;
  }
}
