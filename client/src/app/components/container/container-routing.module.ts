import { GuestGuard } from './../../guards/guest.guard';
import { SignupComponent } from './../signup/signup.component';
import { SigninComponent } from './../signin/signin.component';
import { AuthGuard } from './../../auth.guard';
import { ProductsComponent } from './../products/products.component';
import { FarmersComponent } from './../farmers/farmers.component';
import { CustomersComponent } from './../customers/customers.component';
import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'signin', component: SigninComponent, canActivate: [GuestGuard] },
      { path: 'signup', component: SignupComponent, canActivate: [GuestGuard] },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          { path: "farmers", component: FarmersComponent },
          { path: ":farmerId/products", component: ProductsComponent }
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerRoutingModule {}
