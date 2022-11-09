import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user: { name: string; email: string; username: string; password: string; }){
    if(user.name === undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false
    }else {
      return true
    }
  }
  validateEmail(email: string){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(email)
  }
}
