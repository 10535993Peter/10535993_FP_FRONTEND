import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertsComponent } from './add-adverts.component';

describe('AddAdvertsComponent', () => {
  let component: AddAdvertsComponent;
  let fixture: ComponentFixture<AddAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //const fixture = TestBed.createComponent(AddAdvertsComponent);
    //const addadverts = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
    // $('.title').text("UnitTestAdTitle");
    // $('.description').text("UnitTestAdDescription");
    // $('.image').text("https://www.google.com");
    
  });
});
