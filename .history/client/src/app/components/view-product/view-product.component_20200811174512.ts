import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
 data:any;
 constructor(private viewProduct: ProductsService) {
    viewProduct.getproducts().subscribe((result: any) => {
      this.data = result.data;
    });
  }

  ngOnInit(): void {
  }

}
