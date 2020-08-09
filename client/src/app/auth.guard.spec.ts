import { TestBed } from '@angular/core/testing';

import { DashboardGuard } from './auth.guard';

describe('DashboardGuard', () => {
  let guard: DashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
