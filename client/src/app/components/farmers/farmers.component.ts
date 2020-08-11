import { FarmerServicesService } from './../../services/farmer-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss']
})
export class FarmersComponent implements OnInit {

  public farmers = [];

  constructor(private _farmerServicce: FarmerServicesService) { }

  ngOnInit(): void {
    this._farmerServicce.showFarmers().subscribe(response => {
          this.farmers = response.data;
    })
  }

}
