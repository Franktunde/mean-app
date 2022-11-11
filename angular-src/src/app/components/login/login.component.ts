import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password,
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user)
        console.log(data.msg, {cssClass: 'alert-success', timeout: 5000})
        this.router.navigate(["dashboard"])
      }else {
        console.log(data.msg, {cssClass: 'alert-danger', timeout: 5000})
        this.router.navigate(["login"])
      }
    })
  }

  ngModel() {}

  ngOnInit(): void {}
}
