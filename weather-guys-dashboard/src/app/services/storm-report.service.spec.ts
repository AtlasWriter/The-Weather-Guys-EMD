import { TestBed } from '@angular/core/testing';

import { StormReportService } from './storm-report.service';

describe('StormReportService', () => {
  let service: StormReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StormReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
