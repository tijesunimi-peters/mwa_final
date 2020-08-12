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
 data:any
  constructor(private service: ProductsService,private route: ActivatedRoute) {


   }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getproductwithid(id).subscribe((result)=>{
      this.data=
    })
  }



}
