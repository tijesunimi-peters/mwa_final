import { AuthenticationService } from 'src/app/services/authentication.service';
import {
  Directive,
  HostBinding,
  OnInit,
  ElementRef,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[authLink]',
})
export class AuthLinkDirective implements OnInit, OnChanges {
  @Input('authLinkValue') value: boolean;
  @Input('authDisplay') displayValue: string = 'block';

  @HostBinding('style.display') display = 'none';

  constructor(
    private elem: ElementRef,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    if (this.value) {
      this.display = this.displayValue;
    }
  }

  ngOnChanges(changes) {
    if(this.value) {
      this.display = this.displayValue; 
    } else {
      this.display = "none";
    }
  }

}
