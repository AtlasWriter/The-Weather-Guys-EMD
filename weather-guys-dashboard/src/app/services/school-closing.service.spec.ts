import { TestBed } from '@angular/core/testing';

import { SchoolClosingService } from './school-closing.service';

describe('SchoolClosingService', () => {
  let service: SchoolClosingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolClosingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
