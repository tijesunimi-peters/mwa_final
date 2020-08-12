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
<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';

>>>>>>> 6b864ad52d19952c9f645af087abb7055abd7690
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
  providers: [ProductsService],
<<<<<<< HEAD
  imports: [CommonModule, ContainerRoutingModule, CenterModule, NavModule,ReactiveFormsModule],
  exports: [ContainerComponent,ReactiveFormsModule],
=======
  exports: [ContainerComponent, ReactiveFormsModule],
>>>>>>> 6b864ad52d19952c9f645af087abb7055abd7690
  bootstrap: [ContainerComponent],
})
export class ContainerModule {}
