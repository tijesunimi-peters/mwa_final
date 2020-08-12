import { Component, OnInit,Output } from '@angular/core';

import { from } from 'rxjs';
import { ViewcartService } from '../../services/viewcart.service'
@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  public carts = [];
  
  constructor(private view : ViewcartService) { }

  ngOnInit() {
    this.view.viewcart().subscribe((response)=>{
      this.carts = response;
      console.log(this.carts)
   })
      
  }

}
