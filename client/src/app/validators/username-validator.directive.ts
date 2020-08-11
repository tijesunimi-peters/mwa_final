import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms';
import { Directive } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Directive({
  selector: '[usernameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true,
    },
  ],
})
export class UsernameValidatorDirective implements AsyncValidator {
  constructor(private registerService: RegistrationService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(control.value);
    return this.registerService.verifyUsername(control.value).pipe(
      map((response) => null),
      catchError((_) => of({ uniqueUsername: 'Username is taken' }))
    );
  }
}
