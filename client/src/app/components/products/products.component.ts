import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  data: any;

  constructor(private viewProduct: ProductsService) {
    viewProduct.getProducts().subscribe((result: any) => {
      this.data = result.data;
    });
  }

  ngOnInit(): void {}
}
