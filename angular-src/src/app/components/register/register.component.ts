import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import {FlashMessagesService} from 'flash-messages-angular'

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

  constructor(private validateService: ValidateService, private flashMessage:FlashMessagesService) {}

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
      this.flashMessage.show('please fill all fields', {cssClass: 'alert-danger', timeout: 3000});
     
    }

    //Required Email Field
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
  
    }
  }
}
