// added imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';
import { AdvertsComponent } from './adverts.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

// added AppComponent
describe('AdvertsComponent', () => {
  let component: AdvertsComponent;
  let fixture: ComponentFixture<AdvertsComponent>;
  let app: AppComponent;

  // added providers and imports
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsComponent ],
      providers: [AdvertService, ApiService, AppComponent],
      imports: [AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //tests added:

  it('should display correctly formatted date', ()=>{
    var mockDate = "10/10/2021 10:10 am";
    expect(component.getDateTime(mockDate)).toBe('10/10/2021 10:10 am');
  });

  it('should not incorrectly formatted date', ()=>{
    var mockDate = "10/10/2021";
    expect(component.getDateTime(mockDate)).not.toBe('10/10/2021');
  });

  it('should contain title', ()=>{
    expect($(fixture.nativeElement).find('.title').length).not.toBeNull();
  });

  it('should contain description', ()=>{
    expect($(fixture.nativeElement).find('.description').length).not.toBeNull();
  });

  it('should contain date created', ()=>{
    expect($(fixture.nativeElement).find('.date created').length).not.toBeNull();
  });

  it('should contain date updated', ()=>{
    expect($(fixture.nativeElement).find('.date updated').length).not.toBeNull();
  });

  it('should open modal on click', ()=>{
    $('.addAdverts shadow').click();
    expect(component.app.openModal).toThrow();
  });
});
