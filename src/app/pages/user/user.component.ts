import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

import { ApiService } from 'src/app/services/api-service/api.service';
import { VendorService } from 'src/app/services/vendor-service/vendor.service';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  faPlus = faPlus;
  public users: any = [];
  public firstname: any = "";
  public lastname: any = "";
  public email: any = "";
  public password: any = "";
  public mobile: any = "";
  public company: any = "";
  public error: string = "";
  public userService: UserService;
  public submitted = false;

  constructor(userService: UserService, public app: AppComponent, public vendorService: VendorService, public api: ApiService) {
    this.userService = userService;
    let that = this;
    this.userService.getAll((data:any)=>{
      that.users = data;
    });
  }

  ngOnInit(): void {

  }

  fieldChange(){
    this.error = "";
  }

  register(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let that = this;

    if(this.firstname == "" || this.lastname == "" || this.mobile == "" || this.email == "" || this.password == "" ||  this.company == ""){
      this.error = "All the fields are required to register an account";
    } else if (!re.test(this.email)){
      this.error = "Please input a valid email address";
    } else{
      this.userService.register(this.firstname, this.lastname, this.email, this.password, this.mobile, this.company, (data: any)=>{
        if(data.status != undefined && data.status == "success"){
          that.app.users = data.users;
          this.submitted = true;
        } else {
          that.error = data.error;
        }
      });
    }
  }

  clear(){
    this.submitted = false;
      this.firstname = "";
      this.lastname = ""
      this.mobile = "";
      this.email = "";
      this.password = "";
      this.company = "";
  }

  search(): void {
    let that = this;
    this.userService.getByEmail(this.app.users.email, (data:any)=>{
      that.users = data;
    })
  }


}