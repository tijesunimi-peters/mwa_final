import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
 id:string
  constructor(private service: ProductsService,private route: ActivatedRoute) {


   }

  ngOnInit(): void {
    this.route.params.subscribe((result)=>this.id=result.id)
    console.log(this.id)
  }

}
