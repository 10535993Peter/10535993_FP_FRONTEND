// added imports
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { MyAdsComponent } from './my-ads.component';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserService } from 'src/app/services/user-service/user.service';
import { LoginComponent } from 'src/app/pages/login/login.component';

describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;
  let app: AppComponent;
  let user: UserService;
  let login: LoginComponent;

  // added providers and imports
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdsComponent ],
      providers: [AdvertService, ApiService, AppComponent, LoginComponent],
      imports: [AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  // it('should create', inject([UserService], (injectService: UserService) => {
  //   expect(component).toBeTruthy();
  // }));


  // it('should display correctly formatted date', ()=>{
  //   var mockDate = "10/10/2021 10:10 am";
  //   expect(component.getDateTime(mockDate)).toBe('10/10/2021 10:10 am');
  // });

  // it('should not incorrectly formatted date', ()=>{
  //   var mockDate = "10/10/2021";
  //   expect(component.getDateTime(mockDate)).not.toBe('10/10/2021');
  // });

  // it('should contain title', ()=>{
  //   expect($(fixture.nativeElement).find('.title').length).not.toBeNull();
  // });

  // it('should contain description', ()=>{
  //   expect($(fixture.nativeElement).find('.description').length).not.toBeNull();
  // });

  // it('should contain date created', ()=>{
  //   expect($(fixture.nativeElement).find('.date created').length).not.toBeNull();
  // });

  // it('should contain date updated', ()=>{
  //   expect($(fixture.nativeElement).find('.date updated').length).not.toBeNull();
  // });

  // it('should open modal on click', ()=>{
  //   $('.addAdverts shadow').click();
  //   expect(component.app.openModal).toThrow();
  // });

});


