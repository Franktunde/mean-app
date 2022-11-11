import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onLogoutClick() {
    this.authService.logOut();
    console.log('You are logged out', {
      cssClass: 'alert-danger',
      timeout: 3000,
    });
    this.router.navigate(['/login'])
    return false;
  }
}
