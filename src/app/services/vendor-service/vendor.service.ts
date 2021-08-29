import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private api: ApiService;
  constructor(api: ApiService) { 
    this.api = api;
  }


  register(company: any, companycontactname: any, companyemail: any, address: any, internalcontact: any, sector: any, callback: any){
    this.api.serverCall("POST", "/api/vendors", {company: company, companycontactname: companycontactname, companyemail: companyemail, address: address, internalcontact: internalcontact, sector: sector}, (data: any)=>{
      callback(data);
    });
  }

  getAll(callback: any) {
    this.api.serverCall("GET", "/api/vendors", null, (data: any)=>{
      callback(data);
  });
}

}