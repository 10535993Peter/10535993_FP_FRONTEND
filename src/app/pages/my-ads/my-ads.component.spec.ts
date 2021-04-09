// added imports
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { MyAdsComponent } from './my-ads.component';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user-service/user.service';


describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;
  let app: AppComponent;
  let user: UserService;

  // added providers and imports
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdsComponent ],
      providers: [AdvertService, ApiService, AppComponent, UserService],
      imports: [AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', inject([UserService], (injectService: UserService) => {
    expect(component).toBeTruthy();
  }));


  // it('should display one ad title field', ()=>{
  //   expect($(fixture.nativeElement).find('.title').length).toBe(1);
  // });

  // it('should display one ad description field', ()=>{
  //   expect($(fixture.nativeElement).find('.description').length).toBe(1);
  // });

  // it('should display one date created field', ()=>{
  //   expect($(fixture.nativeElement).find('.date created').length).toBe(1);
  // });

  // it('should display one date updated field', ()=>{
  //   expect($(fixture.nativeElement).find('.date updated').length).toBe(1);
  // });

  // it('should throw error if any field is empty', () => {
  //   component.data.title = "";
  //   component.data.description = "";
  //   component.data.image = "";
  //   $('.createAd').click();
  //   expect(component.error).toBe("All the fields are required to create an ad");
  // });

  // it('should accept correctly formatted input values, not throw error, and close modal', () => {
  //   component.data.title = "TestTitle";
  //   component.data.description = "TestDescription";
  //   component.data.image = "TestImage";
  //   $('.createAd').click();
  //   expect(component.error).not.toBe("All the fields are required to create an ad");
  //   expect(component.app.closeModal).toThrow();
  // });

});


