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

  updateVendor(_id: any, company: any, companyContactName: any, companyEmail: any, address: any, internalContact: any, sector: any, callback: any){
    this.api.serverCall("PUT", "/api/vendors/_id", {_id: _id, company: company, companyContactName: companyContactName, companyEmail: companyEmail, address: address, internalContact: internalContact, sector: sector}, (data: any)=>{
      callback(data);
    });
  }

  // updateVendor(currentVendor: { company: any; companyContactName: any; companyEmail: any; address: any; internalContact: any; sector: any; callback: any}){
  //   this.api.serverCall("PUT", "/api/vendors/:id", {company: currentVendor.company, companyContactName: currentVendor.companyContactName, companyEmail: currentVendor.companyEmail, address: currentVendor.address, internalContact: currentVendor.internalContact, sector: currentVendor.sector}, (data: any)=>{
  //     callback(data);
  //   });
  // }

  getAll(callback: any) {
    this.api.serverCall("GET", "/api/vendors", null, (data: any)=>{
      callback(data);
    });
  }

  // getOne(company: string, callback: any) {
  //   this.api.serverCall("GET", "/api/vendors/"+company, (data: any)=>{
  //     callback(data);
  // });
  
  findByCompany(company: string, callback: any){
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