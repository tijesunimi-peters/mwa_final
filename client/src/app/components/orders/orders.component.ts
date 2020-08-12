import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  userId: string;

  farmerColumns = ['Customer Name', 'Product', 'Status', "Date"];
  customerColumns = ['Product', 'Quantity', 'Status', 'Date'];

  headerTitles = [];

  constructor(
    private farmerdash: OrderService,
    private authencationService: AuthenticationService,
    private router: Router
  ) {
    this.userId = authencationService.user._id;
  }

  checkUser() {
    return this.authencationService.role == 'customer';
  }

  getOrders() {
    if (this.checkUser()) {
      this.farmerdash.getOrdersForCustomers(this.userId).subscribe((res) => {
        this.orders = res.data;
      });
    } else {
      this.farmerdash.getOrdersForFarmers(this.userId).subscribe((res) => {
        this.orders = res.data;
      });
    }
  }

  ngOnInit(): void {
    if (!this.userId) {
      this.router.navigate(['signin']);
    } else {
      this.headerTitles = this.checkUser()
        ? this.customerColumns
        : this.farmerColumns;
      this.getOrders();
    }
  }
}
