import { from } from 'rxjs';
import { NavModule } from './../nav/nav.module';
import { CenterModule } from './../center/center.module';

import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import{ AddProductService} from '../../services/add-product.service'
@NgModule({
  declarations: [DashboardComponent, ProfileComponent, ProductFormComponent],
  imports: [CommonModule, DashboardRoutingModule, CenterModule, NavModule,ReactiveFormsModule,HttpClientModule],
  providers: [AddProductService],
  exports: [DashboardComponent,ReactiveFormsModule],
})
export class DashboardModule {}
