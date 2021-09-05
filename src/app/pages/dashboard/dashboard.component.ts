import { Component, NgModule, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

import { ApiService } from 'src/app/services/api-service/api.service';
import { VendorService } from 'src/app/services/vendor-service/vendor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public users: any = [];
  public userCount: any = [];

    constructor(public userService: UserService, public app: AppComponent, public vendorService: VendorService, public api: ApiService) {
      this.userService = userService;
      let that = this;
      this.userService.getUserCount((data:any)=>{
        that.userCount = data;
      });
   }

  ngOnInit(): void {
  }

}

// HomePageComponent