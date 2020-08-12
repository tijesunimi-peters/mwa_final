import { ViewProductComponent } from './../view-product/view-product.component';
import { from } from 'rxjs';
import { NavModule } from './../nav/nav.module';
import { CenterModule } from './../center/center.module';

import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import{ AddProductService} from '../../services/add-product.service'
import{UpdateProductService} from '../../services/update-product.service'
import{} from '../view-product/view-product.component'
@NgModule({
  declarations: [DashboardComponent, ProfileComponent, ProductFormComponent,UpdateProductComponent,ViewProductComponent],
  imports: [CommonModule, DashboardRoutingModule, CenterModule, NavModule,ReactiveFormsModule,HttpClientModule],
  providers: [AddProductService,UpdateProductService,ProductsService],
  exports: [DashboardComponent,ReactiveFormsModule],
})
export class DashboardModule {}
