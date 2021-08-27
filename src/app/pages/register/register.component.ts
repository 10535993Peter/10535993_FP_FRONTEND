import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  public firstname: any = "";
  public lastname: any = "";
  public username: any = "";
  public emailaddress: any = "";
  public password: any = "";
  public companyname: any = "";
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

    if(this.firstname == "" || this.lastname == "" || this.username == "" || this.emailaddress == "" || this.password == "" ||  this.companyname == ""){
      this.error = "All the fields are required to register an account";
    } else if (!re.test(this.username)){
      this.error = "Please input a valid email address";
    } else{
      this.userService.register(this.firstname, this.lastname, this.username, this.emailaddress, this.password, this.companyname, (data: any)=>{
        if(data.status != undefined && data.status == "success"){
          that.app.user = data.user;
          that.app.navigateToUrl("/register");
        } else {
          that.error = data.error;
        }
      });
    }
  }
}