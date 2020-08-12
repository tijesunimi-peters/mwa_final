import { RegistrationService } from './../services/registration.service';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { Directive } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Directive({
  selector: '[uniqueEmail]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqueEmailValidator,
      multi: true,
    },
  ],
})
export class UniqueEmailValidator implements AsyncValidator {
  constructor(private emailValidator: RegistrationService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.emailValidator.verifyEmail(control.value).pipe(
      map((response) => null),
      catchError((_) => of({ uniqueEmail: "Email is taken" }))
    );
  }
}
