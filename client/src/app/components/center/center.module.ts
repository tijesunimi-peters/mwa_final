import { CenterComponent } from './center.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CenterComponent],
  imports: [
    CommonModule
  ],
  exports: [ CenterComponent ]
})
export class CenterModule { }
