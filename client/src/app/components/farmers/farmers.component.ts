import { FarmersService } from '../../services/farmers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss'],
})
export class FarmersComponent implements OnInit {
  public farmers = [];
  errors = [];

  constructor(private _farmerServicce: FarmersService) {}

  ngOnInit(): void {
    this._farmerServicce.showFarmers().subscribe((response) => {
      this.farmers = response.data;
    });
  }

  sort(order) {
    this._farmerServicce.showFarmers(order).subscribe((response) => {
      this.farmers = response.data;
    });
  }
}
