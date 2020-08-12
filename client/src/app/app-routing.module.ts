import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { EmailNotificationComponent } from './components/email-notification/email-notification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full' },
  { path: 'home', redirectTo: 'app/home', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: 'email-notification', component: EmailNotificationComponent },
  { path: 'email-verification/:verification_token', component: EmailVerificationComponent },
  {
    path: 'app',
    loadChildren: () =>
      import('./components/container/container.module').then(
        (x) => x.ContainerModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (x) => x.DashboardModule
      ),
  },
  { path: '404',  component: NotFoundComponent },
  // Don't remove needs a fix
  // { path: '**',  component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
