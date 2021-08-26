import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // newuser(username: any, password: any, firstname: any, lastname: any, avatar: any, arg5: (data: any) => void) {
  //   throw new Error('Method not implemented.');
  // }
  private api: ApiService;
  constructor(api: ApiService) { 
    this.api = api;
  }

  loggedIn(callback: any){
    this.api.serverCall("GET", "/api/isLoggedIn", null, (data: any)=>{
      callback(data);
    });
  }

  getLoggedInUser(callback: any ){
    this.api.serverCall("GET", "/api/loggedInUser", null, (data: any)=>{
      callback(data);
    });
  }

  logOut(callback: any){
    this.api.serverCall("GET", "/api/logout", null, (data: any)=>{
      callback(data);
    });
  }

  login(email: any, password: any, callback: any){
    this.api.serverCall("POST", "/api/login", {email: email, password: password}, (data: any)=>{
      callback(data)
    });
  }

  register(firstName: any, lastName: any, username: any, email: any, password: any, avatar: any, callback: any){
    this.api.serverCall("POST", "/api/register", {firstName: firstName, lastName: lastName, email: email, username: username, password: password, avatar: avatar}, (data: any)=>{
      callback(data);
    });
  }
}
