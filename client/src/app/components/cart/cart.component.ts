import { element } from 'protractor';
import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart = null;
  farmer = null;
  @Input() isAuthenticated: boolean = false;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  ngOnInit(): void {
  }

  get items() {
    return this.cart.items;
  }


}
