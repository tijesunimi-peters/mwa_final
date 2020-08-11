import { FarmerDashboardService } from './../../services/farmer-dashboard.service';
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

@NgModule({
  declarations: [
    ContainerComponent,
    HomeComponent,
    CustomersComponent,
    FarmersComponent,
    ProductsComponent,
  ],
  providers: [FarmerDashboardService, ProductsService],

  imports: [CommonModule, ContainerRoutingModule, CenterModule, NavModule],
  exports: [ContainerComponent],
  bootstrap: [ContainerComponent],
})
export class ContainerModule {}
