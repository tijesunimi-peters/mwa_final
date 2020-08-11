import { FarmerDashboardService } from './../../services/farmer-dashboard.service';
import { FarmersService } from '../../services/farmers.service';
import { ProductsService } from '../../services/products.service';
import { NavModule } from './../nav/nav.module';
import { FarmersComponent } from './../farmers/farmers.component';
import { CenterModule } from './../center/center.module';
import { HomeComponent } from '../home/home.component';
import { ContainerRoutingModule } from './container-routing.module';

import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from '../customers/customers.component';
import { ProductsComponent } from '../products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContainerComponent,
    HomeComponent,
    CustomersComponent,
    FarmersComponent,
    ProductsComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ContainerRoutingModule,
    CenterModule,
    NavModule,
    ReactiveFormsModule,
  ],
  
  providers: [ProductsService, FarmersService, FarmerDashboardService],
  exports: [ContainerComponent, ReactiveFormsModule],
  bootstrap: [ContainerComponent],
})
export class ContainerModule {}
