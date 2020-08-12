import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
 data:any;

 id:string="5f31d9b80a0aa100428dc24f";
 constructor(private service: ProductsService,private router: Router) {

}

  ngOnInit(): void {
    this.service.getproductwithid(this.id).subscribe((result: any) => {
      this.data = result.data;
    });
  }
  deleteProduct(event,id){
    console.log(id)
    this.service.deleteproductwithid(id).subscribe(()=>this.ngOnInit());
  }
  updateProduct(){
    this.router.navigate(['/update-product']);
  }

}
