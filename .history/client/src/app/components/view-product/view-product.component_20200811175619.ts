import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
 data:any;
 id:string;
 constructor(private viewProduct: ProductsService) {
  viewProduct.getproductwithid().subscribe((result: any) => {
    this.data = result.data;
  });
}

  ngOnInit(): void {
  }

}
