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

  it('should get all adds from /api/adverts', () => {
    const testAdd = "AddTest";
    service.getAllAdverts(testAdd);
    expect(service.api.serverCall.length).toBeGreaterThanOrEqual(1);
  });

  it('should get all adds from /api/myAdverts/ + myId', () => {
    const myId = "1";
    const testAdd = "AddTest";
    service.getMyAdverts(myId, testAdd);
    expect(service.api.serverCall.length).toBeGreaterThanOrEqual(1);
  });
  
});
