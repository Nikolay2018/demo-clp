import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyGuestGuard } from './only-guest.guard';

describe('OnlyGuestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyGuestGuard]
    });
  });

  it('should ...', inject([OnlyGuestGuard], (guard: OnlyGuestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
