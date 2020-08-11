import { TestBed } from '@angular/core/testing';

import { FarmerServicesService } from './farmer-services.service';

describe('FarmerServicesService', () => {
  let service: FarmerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
