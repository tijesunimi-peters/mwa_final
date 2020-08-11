import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FarmArt';
  private isAuthenticated = false;

  constructor(private authService: AuthenticationService) {
    this.authService.event.subscribe(this.updateAuthState);
  }
  
  ngOnInit() {
    this.authService.reloadToken();
  }

  updateAuthState = (val) => {
    console.log("in updateAuthState ")
    this.isAuthenticated = val;
  }
}
