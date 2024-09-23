import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClosingFormComponent } from './school-closing-form.component';

describe('SchoolClosingFormComponent', () => {
  let component: SchoolClosingFormComponent;
  let fixture: ComponentFixture<SchoolClosingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolClosingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolClosingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
