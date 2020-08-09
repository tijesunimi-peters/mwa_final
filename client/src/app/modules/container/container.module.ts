import { HomeComponent } from './../../components/home/home.component';
import { ContainerRoutingModule } from './container-routing.module';

import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ContainerComponent, HomeComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule
  ],
  exports: [ ContainerComponent ],
  bootstrap: [ ContainerComponent ]
})
export class ContainerModule { }
