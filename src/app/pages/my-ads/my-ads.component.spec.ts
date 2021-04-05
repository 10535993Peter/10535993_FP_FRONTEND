import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { MyAdsComponent } from './my-ads.component';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('MyAdsComponent', () => {
  let component: MyAdsComponent;
  let fixture: ComponentFixture<MyAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAdsComponent ],
      providers: [AdvertService, ApiService, AppComponent],
      imports: [AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    $(fixture.nativeElement).find('._id').val("1");
  });

  it('should create', () => {
   expect(component).toBeTruthy();
  });

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

});
