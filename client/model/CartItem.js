export class CartItem {
     id = Number;
     name = String;
     quantity= Number;
     price = Number;
     total= Number;

  
    constructor(id, name, quantity, price) {
    
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.total = this.quantity * this.price;
    }

    // static getview(){
    //   return this.id + this.name + this.quantity + this.price
    // }
    // static gettotal(){
    //   return this.total
    // }
  }