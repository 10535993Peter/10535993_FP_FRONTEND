import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsComponent } from './adverts.component';

describe('AdvertsComponent', () => {
  let component: AdvertsComponent;
  let fixture: ComponentFixture<AdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //const fixture = TestBed.createComponent(AdvertsComponent);
    //const adverts = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
