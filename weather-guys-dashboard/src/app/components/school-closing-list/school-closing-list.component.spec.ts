import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClosingListComponent } from './school-closing-list.component';

describe('SchoolClosingListComponent', () => {
  let component: SchoolClosingListComponent;
  let fixture: ComponentFixture<SchoolClosingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolClosingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolClosingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
