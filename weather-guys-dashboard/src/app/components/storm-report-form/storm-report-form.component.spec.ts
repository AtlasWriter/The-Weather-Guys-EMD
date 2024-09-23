import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormReportFormComponent } from './storm-report-form.component';

describe('StormReportFormComponent', () => {
  let component: StormReportFormComponent;
  let fixture: ComponentFixture<StormReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormReportFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
