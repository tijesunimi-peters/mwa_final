import { CartComponent } from './../cart/cart.component';
import { AuthLinkDirective } from './../../directives/auth-link.directive';
import { RouterModule } from '@angular/router';
import { CenterModule } from './../center/center.module';
import { NavComponent } from './nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NavComponent, AuthLinkDirective, CartComponent],
  imports: [
    CommonModule,
    RouterModule,
    CenterModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
