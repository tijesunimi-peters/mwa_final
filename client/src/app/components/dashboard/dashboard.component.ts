import { FarmerDashboardService } from './../../services/farmer-dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any[];
  headElements = ['CustomerName', 'Product', 'Quantity', 'Status'];
  constructor(private farmerdash: FarmerDashboardService) {
    farmerdash.getOrdersForFarmers('5f3024e6e328ca003951438f').subscribe((res) => {
      this.data = res.data;
    });
  }

  ngOnInit(): void {}
}
