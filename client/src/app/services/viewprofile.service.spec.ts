import { TestBed } from '@angular/core/testing';

import { ViewprofileService } from './viewprofile.service';

describe('ViewprofileService', () => {
  let service: ViewprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
