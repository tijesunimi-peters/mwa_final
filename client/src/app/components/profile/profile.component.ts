import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: {
    username: string;
    email: string;
    address: {
      state: string;
      city: string;
      street: string;
      zipcode: string;
    };
  } = {
    username: '',
    email: '',
    address: { state: '', city: '', street: '', zipcode: '' },
  };

  constructor(private view: ProfileService) {}

  ngOnInit(): void {
    this.view.viewProfile().subscribe((response) => {
      this.profile = response.data[0];
    });
  }
}
