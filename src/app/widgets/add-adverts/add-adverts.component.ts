import { Component, OnInit } from '@angular/core';
import { faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from 'src/app/app.component';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-adverts',
  templateUrl: './add-adverts.component.html',
  styleUrls: ['./add-adverts.component.scss']
})
export class AddAdvertsComponent implements OnInit {
  data: any = {
    title: "",
    description: "",
    image: ""
  };
  error:any = "";
  constructor(public app: AppComponent, public advertService: AdvertService) { }

  ngOnInit(): void {
  }

  fieldChange(){
    this.error = "";
  }

  createAd(){
    let that = this;
    if(this.data.title == "" || this.data.description == "" || this.data.image == ""){
      this.error = "All the fields are required to create an ad";
      return;
    }
    this.advertService.createAd(this.data.title, this.data.description, this.app.user._id, this.data.image, (data:any)=>{
      Swal.fire("Ad Created",
        "Your ad has been added successfully",
        "success"
      ).then((data)=>{
        if(data.isConfirmed){
          that.app.closeModal();
          setTimeout(()=>{
            document.location.reload();
          }, 100);
        }
      });
    });
  }

}
