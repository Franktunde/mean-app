import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
// import {FlashMessagesService} from 'flash-messages-angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name!: string;
  username!: string;
  email!: string;
  password!: string;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    };

    //Required Fields
    if (!this.validateService.validateRegister(user)) {
      console.log('please fill all fields', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
    }

    //Required Email Field
    if (!this.validateService.validateEmail(user.email)) {
      console.log('please use a valid email', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
    }

    //Register user
    this.authService.registerUser(user).subscribe((data) => {
      if (data.success) {
        console.log('You are now registered and can login', {
          cssClass: 'alert-success',
          timeout: 3000,
        });
        this.router.navigate(['/login']);
      } else {
        console.log('Something went wrong', {
          cssClass: 'alert-danger',
          timeout: 3000,
        });
        this.router.navigate(['/register']);
      }
    });
  }
}

// if (!this.validateService.validateEmail(user.email)) {
//   this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger', timeout: 3000});

// }

// if (!this.validateService.validateRegister(user)) {
//   this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});

// }
