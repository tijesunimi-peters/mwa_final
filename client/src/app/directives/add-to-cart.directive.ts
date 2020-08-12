import { CartService } from './../services/cart.service';
import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[addToCart]'
})
export class AddToCartDirective {
  @Input("products") products: [];

  @HostListener("click", ["$event.target"]) clickHandler(elem: any) {
    let product = this.products.find((product: any) => product._id == elem.dataset.value)
    this.cartService.add(product);
  }

  @HostBinding("disabled") shouldDisable;

  constructor(private cartService: CartService) {}

}
