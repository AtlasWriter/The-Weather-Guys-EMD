import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerOutageListComponent } from './power-outage-list.component';

describe('PowerOutageListComponent', () => {
  let component: PowerOutageListComponent;
  let fixture: ComponentFixture<PowerOutageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerOutageListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerOutageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
