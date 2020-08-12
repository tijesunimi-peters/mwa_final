import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = { items: [] }

  event$ = new EventEmitter();

  constructor() {
    if(localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart"))
    } else {
      localStorage.setItem("cart", JSON.stringify({items: []}));
    }
  }

  get event() {
    return this.event$;
  }

  get items() {
    return this.cart.items;
  }

  add(product) {
    this.cart.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.event$.emit("add");
  }
}
