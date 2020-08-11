import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile = [];

  constructor(private view: ProfileService) {}

  ngOnInit(): void {
    this.view.viewProfile().subscribe((response) => {
      this.profile = response.data;
    });
  }
}
