import { OrdersComponent } from './../orders/orders.component';
import { ProductFormComponent } from './../product-form/product-form.component';
import { AuthGuard } from '../../auth.guard';

import { ProfileComponent } from './../profile/profile.component';
import {UpdateProductComponent} from "../update-product/update-product.component"
import {ViewProductComponent} from "../view-product/view-product.component"
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'add-product',
        component: ProductFormComponent,
      },
      {
        path: 'update-product/:id',
        component: UpdateProductComponent,

      },
      {
        path: 'view-product',
        component: ViewProductComponent,

      }
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
