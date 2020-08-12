import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  data = [];

  constructor(
    private service: ProductsService,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.service.getFarmerProducts(this.authService.user._id).subscribe((result: any) => {
      this.data = result.data;
    });
  }

  deleteProduct(event, id) {
    this.service.delete(id).subscribe(() => this.ngOnInit());
  }

  updateProduct(event, id) {
    this.router.navigate(['/update-product', id]);
  }
}
