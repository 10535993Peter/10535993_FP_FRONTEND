import { Component } from '@angular/core';
import { AppProvider } from './app.init.component';

import * as jquery from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp-frontend';
  user: any = null;
  constructor(
    protected router: Router, 
    private appProvider: AppProvider
  ){
    this.user = appProvider.getUser();
  }

  ngOnInit(){
    if(this.user == null){
      this.navigateToUrl('/login');
    } else {}
  }

  navigateToUrl(url: string){
    this.router.navigate([url]);
  }

  closeModal(){
    $('.modalBackDrop').addClass("dNone");
    $('.modalSection .modalTitle').text("");
    $('.modalSection').removeClass("open");
    this.router.navigate([{outlets: {modal: null} , replaceUrl: false }]);
  }

  openModal(page:any, title:string){
    $('.modalBackDrop').removeClass("dNone");
    $('.modalSection .modalTitle').text(title);
    $('.modalSection').addClass("open");
    this.router.navigate([{outlets: {modal: page} , replaceUrl: false }]);
  }
}
