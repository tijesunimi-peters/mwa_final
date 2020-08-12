import { of, from, Subscription } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  data: any;
  sub: Subscription;
  errors = [];

  constructor(private viewProductService: ProductsService, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.sub = from(this.route.params).pipe(
      flatMap(x => {
        if(!x.farmerId) throw new Error("Farmers id required")
        return this.viewProductService.getFarmerProducts(x.farmerId)
      })
    ).subscribe((result: any) => this.data = result.data, this.showError);
  }

  showError = (e) => {
    this.errors = [e.message]
  }

  addToCart(product) {
    this.viewProductService.addProduct(product);
  }
}
