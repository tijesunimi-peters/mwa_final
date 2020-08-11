import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  data:any[];
  headElements = ['CustomerName', 'Product', 'Quantity', 'Status'];
  constructor(private farmerdash: OrderService) {
    farmerdash.getOrdersForFarmers('5f3024e6e328ca003951438f').subscribe((res) => {
      this.data = res.data;
    });
  }

  ngOnInit(): void {
  }

}
