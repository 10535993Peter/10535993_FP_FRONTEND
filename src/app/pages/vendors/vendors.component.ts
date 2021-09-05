import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
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

  public _id: any;
  public company: any = "";
  public companyContactName: any = "";
  public companyEmail: any = "";
  public address: any = "";
  public internalContact: any = "";
  public sector: any = "";
  public companySearch: any = "";
  public error: string = "";
  public submitted = false;
  public currentIndex = -1;
  public updating = false; 
  public updated = false;
  public currentVendor: any;
  
  constructor(public vendorService: VendorService, public api: ApiService, public app: AppComponent) {
    let that = this;
    this.vendorService.getAll((data:any)=>{
      that.vendors = data;
    });

  }

  ngOnInit(): void {
  }

  columns = ["Company", "Company Contact", "Address", "Company Email", "Internal Contact", "Sector"];
  index = ["company", "companyContactName", "address", "companyEmail", "internalContact", "sector"];

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
          this.submitted = true;
        } else {
          that.error = data.error;
        }
      });
    }
  }

  updateVendor(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    let that = this;


    this._id = this.currentVendor.id;
    this.company = this.currentVendor.company;
    this.companyContactName = this.currentVendor.companyContactName;
    this.companyEmail = this.currentVendor.companyEmail;
    this.address = this.currentVendor.address;
    this.internalContact = this.currentVendor.internalContact;
    this.sector = this.currentVendor.sector;
  
    // if(this.currentVendor.company == "" || this.currentVendor.companyContactName == "" || this.currentVendor.address == "" || this.currentVendor.companyEmail == "" || this.currentVendor.internalContact == "" ||  this.currentVendor.sector == "")
    if(this.company == "" || this.companyContactName == "" || this.address == "" || this.companyEmail == "" || this.internalContact == "" ||  this.sector == "")

    {
      this.error = "All the fields are required to update a vendor";
    } else if (!re.test(this.currentVendor.companyEmail)){
      this.error = "Please input a valid email address";
    } else{
      this.vendorService.updateVendor(this.currentVendor._id, this.currentVendor.company, this.currentVendor.companyContactName, this.currentVendor.companyEmail, this.currentVendor.address, this.currentVendor.internalContact, this.currentVendor.sector, (data: any)=>{
        if(data.status != undefined && data.status == "success"){
          that.app.vendor = data.vendor;
          this.updated = true;
        } else {
          that.error = data.error;
        }
      });
    }
  }

  clear(){
    this.submitted = false;
    this.updating = false;
    this.updated = false;
      this.company = "";
      this.companyContactName = ""
      this.companyEmail = "";
      this.address = "";
      this.internalContact = "";
      this.sector = "";
      this.companySearch = "";
      this.currentVendor = null;
      this.currentIndex = -1;
      
  }

  searchBtn(): void {
    let that = this;
    this.vendorService.findByCompany(this.app.vendors.companySearch, (data:any)=>{
      that.vendors = data;
    })
  }


//   searchBtn() {
//     var input, filter, tr, td, col, i, txtValue;
//     input = document.getElementById("searchInput");
//     filter = input.value.toUpperCase();
//     tr = document.getElementById("tablebody");
//     td = tr.getElementsByTagName("td");
//     for (i = 0; i < td.length; i++) {
//         col = td[i].getElementsByTagName("col")[0];
//         txtValue = col.textContent || col.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             td[i].style.display = "";
//         } else {
//             td[i].style.display = "none";
//         }
//     }
// }
// applyFilter(filterValue: string){
//   this.dataSource.filter = filterValue.trim().toLowerCase();
// }

  setActiveVendor(vendor: any, index: number): void {
    this.currentVendor = vendor;
    this.currentIndex = index;
    this.updating = true;
  }
}