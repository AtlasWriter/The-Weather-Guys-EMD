import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOutageFormComponent } from './power-outage-form.component';

describe('PowerOutageFormComponent', () => {
  let component: PowerOutageFormComponent;
  let fixture: ComponentFixture<PowerOutageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerOutageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerOutageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
