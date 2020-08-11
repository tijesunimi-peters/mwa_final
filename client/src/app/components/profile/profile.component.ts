import { Component, OnInit } from '@angular/core';
import { ViewprofileService } from '../../services/viewprofile.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  template: './profile.component.html',
 
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile = [];

  constructor(private view: ViewprofileService) { }

  ngOnInit(): void {
     this.view.viewProfile().subscribe((response)=>{
            this.profile = response.data;
     })
  }
  
}
