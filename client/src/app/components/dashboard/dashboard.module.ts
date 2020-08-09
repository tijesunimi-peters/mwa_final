import { DashboardGuard } from './dashboard.guard';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [DashboardGuard],
  exports: [DashboardComponent],
})
export class DashboardModule {}
