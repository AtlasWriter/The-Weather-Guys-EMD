import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormUpdateListComponent } from './storm-update-list.component';

describe('StormUpdateListComponent', () => {
  let component: StormUpdateListComponent;
  let fixture: ComponentFixture<StormUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StormUpdateListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StormUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
