import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isAuthenticated: boolean = false;
  authSubscription: Subscription;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated().subscribe(value => {
      this.isAuthenticated = value;
    })
  }

  logoutEvent(e) {
    e.preventDefault();
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['signin'])
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
