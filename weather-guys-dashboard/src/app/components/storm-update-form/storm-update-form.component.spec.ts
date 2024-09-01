import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormUpdateFormComponent } from './storm-update-form.component';

describe('StormUpdateFormComponent', () => {
  let component: StormUpdateFormComponent;
  let fixture: ComponentFixture<StormUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
