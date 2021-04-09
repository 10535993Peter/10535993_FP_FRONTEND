import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AdvertService } from 'src/app/services/advert-service/advert.service';

import { AddAdvertsComponent } from './add-adverts.component';

describe('AddAdvertsComponent', () => {
  let component: AddAdvertsComponent;
  let fixture: ComponentFixture<AddAdvertsComponent>;
  let app: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertsComponent ],
      providers: [AppComponent, AdvertService],
      imports: [AppRoutingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //My additional unit tests below:

  it('should throw error if any field is empty', () => {
    component.data.title = "";
    component.data.description = "";
    component.data.image = "";
    $('.createAd').click();
    expect(component.error).toBe("All the fields are required to create an ad");
  });

  it('should accept correctly formatted input values, not throw error, and close modal', () => {
    component.data.title = "TestTitle";
    component.data.description = "TestDescription";
    component.data.image = "TestImage";
    $('.createAd').click();
    expect(component.error).not.toBe("All the fields are required to create an ad");
    expect(component.app.closeModal).toThrow();
  });

});
