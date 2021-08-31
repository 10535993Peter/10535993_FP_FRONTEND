import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAll(callback: any) {
    this.api.serverCall("GET", "/api/vendors", null, (data: any)=>{
      callback(data);
    });
  }

  // getOne(company: string, callback: any) {
  //   this.api.serverCall("GET", "/api/vendors/"+company, (data: any)=>{
  //     callback(data);
  // });
  
  getByCompany(company: string, callback: any){
    this.api.serverCall("GET", "/api/vendors/"+company, {}, (data: any)=>{
      callback(data);
    });
  }
  
  //delete a vendor from the database
  deleteVendor(id: string, callback: any){
    this.api.serverCall("DELETE", "/api/vendors/"+id, {}, (data: any)=>{
      callback(data);
    });
  }

}