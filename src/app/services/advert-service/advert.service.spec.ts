import { TestBed } from '@angular/core/testing';

import { AdvertService } from './advert.service';

describe('AdvertService', () => {
  let service: AdvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //tests added:

  it('should create an ad in an array', () => {
    const newAdd = "AddTest";
    service.getAllAdverts(newAdd);
    expect(service.api.serverCall.length).toBeGreaterThanOrEqual(1);
  });

  //it('should create Ad', () => {
  //  service.createAd();

  //});
});
