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

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerModule,
    CenterModule,
    DashboardModule,
    NavModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
