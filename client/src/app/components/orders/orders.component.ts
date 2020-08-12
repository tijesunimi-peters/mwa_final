import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  data: any[];
  customer_data : any[];
  values: any;

  headElements = ['CustomerName', 'Product', 'Quantity', 'Status'];
  customElements = ['Product', 'Quantity', 'Status'];

  constructor(
    private farmerdash: OrderService,
    private authencationService: AuthenticationService
  ) {
    this.values = JSON.parse(authencationService.myStorage.getItem("user"));

    farmerdash
      .getOrdersForFarmers('5f3024e6e328ca003951438f')
      .subscribe((res) => {
        this.data = res.data;
        console.log(this.data);
      });

    farmerdash
    .getOrdersForCustomers('5f304230baa3be0af31cc8aa')
    .subscribe((res)=>{
      this.customer_data = res.data;
      console.log(this.data);
    });

  }

  checkUser() {
    if (this.values.role == 'customer') return true;
    else {
      return false;
    }
  }

  ngOnInit(): void {

    console.log(this.customer_data)
    console.log(this.data)
  }
}
