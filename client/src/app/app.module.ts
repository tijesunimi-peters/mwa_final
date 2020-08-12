import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { NavModule } from './components/nav/nav.module';
import { CenterModule } from './components/center/center.module';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ContainerModule } from './components/container/container.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './services/registration.service';
import { EmailNotificationComponent } from './components/email-notification/email-notification.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SigninComponent,
    SignupComponent,
    EmailNotificationComponent,
    EmailVerificationComponent,
    NotFoundComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerModule,
    CenterModule,
    DashboardModule,
    NavModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    RegistrationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
