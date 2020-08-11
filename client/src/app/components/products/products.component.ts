import { ViewProductServicesService } from './../../services/view-product-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
data:any;
  constructor(private Viewproduct:ViewProductServicesService) {
   
   Viewproduct.getproducts().subscribe((result:any)=> {this.data=result.data})
    console.log(this.data)
  }


  ngOnInit(): void {}
}
