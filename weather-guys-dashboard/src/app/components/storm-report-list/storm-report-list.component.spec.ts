import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormReportListComponent } from './storm-report-list.component';

describe('StormReportListComponent', () => {
  let component: StormReportListComponent;
  let fixture: ComponentFixture<StormReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormReportListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
