// added imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';
import { AdvertsComponent } from './adverts.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AdvertsComponent', () => {
  let component: AdvertsComponent;
  let fixture: ComponentFixture<AdvertsComponent>;

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
});
