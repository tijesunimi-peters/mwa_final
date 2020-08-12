import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let modifiedRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${this.authService.tokenValue}`
      ),
    });

    if(!modifiedRequest.headers.has("Content-Type")) {
      modifiedRequest = modifiedRequest.clone({
        headers: modifiedRequest.headers.set("Content-Type", "application/json")
      })
    } else if(modifiedRequest.headers.get("Content-Type") === "none") {
      modifiedRequest = modifiedRequest.clone({
        headers: modifiedRequest.headers.delete("Content-Type", "none")
      })
    }

    return next.handle(modifiedRequest);
  }
}
