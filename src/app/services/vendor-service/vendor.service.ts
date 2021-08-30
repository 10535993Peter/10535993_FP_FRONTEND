import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  // private api: ApiService;
  constructor(public api: ApiService) { 
    // this.api = api;
  }


  register(company: any, companyContactName: any, companyEmail: any, address: any, internalContact: any, sector: any, callback: any){
    this.api.serverCall("POST", "/api/vendors", {company: company, companyContactName: companyContactName, companyEmail: companyEmail, address: address, internalContact: internalContact, sector: sector}, (data: any)=>{
      callback(data);
    });
  }

  getAllVendors(callback: any) {
    this.api.serverCall("GET", "/api/vendors", null, (data: any)=>{
      callback(data);
  });
}

}