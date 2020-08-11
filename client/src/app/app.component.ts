import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FarmArt';
  private isAuthenticated = false;
  private tokenSubscription: Subscription;
  private authEventSubscription: Subscription;

  constructor(private authService: AuthenticationService) {
  }
  
  ngOnInit() {
    this.tokenSubscription = this.authService.reloadToken().subscribe(this.updateAuthState);
    this.authEventSubscription = this.authService.event.subscribe(this.updateAuthState);
  }

  updateAuthState = (val) => {
    console.log("Authenticated: ", val);
    this.isAuthenticated = val;
  }

  ngOnDestroy() {
    this.tokenSubscription.unsubscribe();
    this.authEventSubscription.unsubscribe();
  }
}
