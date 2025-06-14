import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternCarolinaMapComponent } from './western-carolina-map.component';

describe('WesternCarolinaMapComponent', () => {
  let component: WesternCarolinaMapComponent;
  let fixture: ComponentFixture<WesternCarolinaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WesternCarolinaMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WesternCarolinaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
