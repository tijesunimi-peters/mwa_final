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
import { BrowseFarmersComponent} from './components/browse-farmers/browse-farmers.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    SigninComponent,
    SignupComponent,
    BrowseFarmersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerModule,
    CenterModule,
    DashboardModule,
    NavModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
