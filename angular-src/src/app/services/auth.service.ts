import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post<any>('http://localhost:3000/users/register', user, {headers: headers}).pipe(map((res => res.json())))
  }
  authenticateUser(user: any){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    return this.http.post<any>('http://localhost:3000/users/authenticate', user, {headers: headers}).pipe(map((res => res.json())))
  }
  getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken)
    headers.append('Content-Type', 'application/json')
    return this.http.get<any>('http://localhost:3000/users/profile', {headers: headers}).pipe(map((res => res.json())))
  }
  storeUserData(user: any, token: any){
    localStorage.setItem('id_token', token)
    localStorage.setItem('user',JSON.stringify(user))
    this.authToken = token;
    this.user = user;
  }
  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear()
  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
