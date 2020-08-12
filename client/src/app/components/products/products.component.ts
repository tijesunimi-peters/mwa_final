import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  data: any;

  constructor(private viewProductService: ProductsService) {
    viewProductService.getProducts().subscribe((result: any) => {
      this.data = result.data;
    });
  }

  ngOnInit(): void {}
  
    addToCart(product){
      this.viewProductService.addProduct(product);
    }
    
  }
      // this.values += event.target.attri
      // console.log(this.values.name);
      
    //  this.viewProductService.addProduct();
    

