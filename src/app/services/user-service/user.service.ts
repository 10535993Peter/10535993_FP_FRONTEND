import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  register(firstName: any, lastName: any, email: any, password: any, mobile: any, company: any, callback: any){
    this.api.serverCall("POST", "/api/users", {firstName: firstName, lastName: lastName, email: email, password: password, mobile: mobile, company: company}, (data: any)=>{
      callback(data);
    });
  }

  getAll(callback: any) {
    this.api.serverCall("GET", "/api/users", null, (data: any)=>{
      callback(data);
    });
  }

  getByEmail(email: string, callback: any){
    this.api.serverCall("GET", "/api/users/"+email, {}, (data: any)=>{
      callback(data);
    });
  }

  getUserCount(callback: any){
    this.api.serverCall("GET", "api/userCount",{}, (data: any)=>{
      callback(data);
    }
    )
  }

}
