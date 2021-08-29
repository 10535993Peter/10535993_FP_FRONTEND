import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { VendorService } from 'src/app/services/vendor-service/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  public company: any = "";
  public companycontactname: any = "";
  public companyemail: any = "";
  public address: any = "";
  public internalcontact: any = "";
  public sector: any = "";
  public error: string = "";
  public vendorService: VendorService;
  
  constructor(vendorService: VendorService, public app: AppComponent) {
    this.vendorService = vendorService;
  }

  ngOnInit(): void {
  }

  fieldChange(){
    this.error = "";
  }

  register(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let that = this;

    if(this.company == "" || this.companycontactname == "" || this.address == "" || this.companyemail == "" || this.internalcontact == "" ||  this.sector == ""){
      this.error = "All the fields are required to register a vendor";
    } else if (!re.test(this.companyemail)){
      this.error = "Please input a valid email address";
    } else{
      this.vendorService.register(this.company, this.companycontactname, this.companyemail, this.address, this.internalcontact, this.sector, (data: any)=>{
        if(data.status != undefined && data.status == "success"){
          that.app.vendor = data.vendor;
          that.app.navigateToUrl("/vendors");
        } else {
          that.error = data.error;
        }
      });
    }
  }

  clear(){
    this.company == "";
    this.companycontactname == "";
    this.address == "";
    this.companyemail == "";
    this.internalcontact == "";
    this.sector == "";
  }

}
