import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = { items: [] }

  constructor() {
    if(localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart"))
    } else {
      localStorage.setItem("cart", JSON.stringify({items: []}));
    }
  }

  get items() {
    return this.cart.items;
  }
}
