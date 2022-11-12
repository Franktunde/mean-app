import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"
import {HttpErrorResponse} from '@angular/common/http'
import { of } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user!: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private error : HttpErrorResponse
    ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (profile)=> {
        this.user = profile.user
      },
      error: (error) => {
        this.error = error;
      },
    })
  }

}
