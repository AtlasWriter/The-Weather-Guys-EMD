import { TestBed } from '@angular/core/testing';

import { PowerOutageService } from './power-outage.service';

describe('PowerOutageService', () => {
  let service: PowerOutageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerOutageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
