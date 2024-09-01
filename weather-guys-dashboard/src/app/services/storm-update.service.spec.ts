import { TestBed } from '@angular/core/testing';

import { StormUpdateService } from './storm-update.service';

describe('StormUpdateService', () => {
  let service: StormUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StormUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
