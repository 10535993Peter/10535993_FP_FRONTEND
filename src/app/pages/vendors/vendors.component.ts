import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/services/api-service/api.service';
import { VendorService } from 'src/app/services/vendor-service/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  faPlus = faPlus;
  public vendors: any = [];

  public company: any = "";
  public companyContactName: any = "";
  public companyEmail: any = "";
  public address: any = "";
  public internalContact: any = "";
  public sector: any = "";
  public error: string = "";
  // public vendorService: VendorService;
  
  constructor(public vendorService: VendorService, public api: ApiService, public app: AppComponent) {
    let that = this;
    this.vendorService.getAllVendors((data:any)=>{
      that.vendors = data;
    });
    // this.vendorService = vendorService;
  }

  ngOnInit(): void {
  }

  fieldChange(){
    this.error = "";
  }

  register(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let that = this;

    if(this.company == "" || this.companyContactName == "" || this.address == "" || this.companyEmail == "" || this.internalContact == "" ||  this.sector == ""){
      this.error = "All the fields are required to register a vendor";
    } else if (!re.test(this.companyEmail)){
      this.error = "Please input a valid email address";
    } else{
      this.vendorService.register(this.company, this.companyContactName, this.companyEmail, this.address, this.internalContact, this.sector, (data: any)=>{
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
    this.companyContactName == "";
    this.address == "";
    this.companyEmail == "";
    this.internalContact == "";
    this.sector == "";
  }


  columns = ["Company", "Company Contact", "Address", "Company Email", "Internal Contact", "Sector"];
  index = ["company", "companyContactName", "address", "companyEmail", "internalContact", "sector"];

}
