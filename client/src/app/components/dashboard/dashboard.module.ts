import { NavModule } from './../nav/nav.module';
import { CenterModule } from './../center/center.module';

import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
  imports: [CommonModule, DashboardRoutingModule, CenterModule, NavModule],
  providers: [],
  exports: [DashboardComponent],
})
export class DashboardModule {}
