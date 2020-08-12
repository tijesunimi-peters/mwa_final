import { ViewProductComponent } from './../view-product/view-product.component';
import { NavModule } from './../nav/nav.module';
import { CenterModule } from './../center/center.module';

import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductService } from '../../services/add-product.service';
import { UpdateProductService } from '../../services/update-product.service';

import { ProductsService } from 'src/app/services/products.service';
@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ProductFormComponent,
    UpdateProductComponent,
    ViewProductComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CenterModule,
    NavModule,
    ReactiveFormsModule,
  ],
  providers: [AddProductService, UpdateProductService, ProductsService],
  exports: [DashboardComponent, ReactiveFormsModule],
})
export class DashboardModule {}
