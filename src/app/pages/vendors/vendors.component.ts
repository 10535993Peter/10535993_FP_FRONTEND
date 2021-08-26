import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  public companyname: any = "";
  public companycontactname: any = "";
  public companyemail: any = "";
  public address: any = "";
  public internalcontact: any = "";
  public sector: any = "";
  public error: string = "";
  public userService: UserService;
  
  constructor(userService: UserService, public app: AppComponent) {
    this.userService = userService;
  }

  ngOnInit(): void {
  }

  
  fieldChange(){
    this.error = "";
  }

  register(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let that = this;

    if(this.companyname == "" || this.companycontactname == "" || this.address == "" || this.companyemail == "" || this.internalcontact == "" ||  this.sector == ""){
      this.error = "All the fields are required to register a vendor";
    } else if (!re.test(this.companyemail)){
      this.error = "Please input a valid email address";
    } else{
      this.userService.register(this.companyname, this.companycontactname, this.address, this.companyemail, this.internalcontact, this.sector, (data: any)=>{
        if(data.status != undefined && data.status == "success"){
          that.app.user = data.user;
          that.app.navigateToUrl("/vendor");
        } else {
          that.error = data.error;
        }
      });
    }
  }

  clear(){
    this.companyname == "";
    this.companycontactname == "";
    this.address == "";
    this.companyemail == "";
    this.internalcontact == "";
    this.sector == "";
  }

}
