import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedFormationsComponent } from './planned-formations.component';

describe('PlannedFormationsComponent', () => {
  let component: PlannedFormationsComponent;
  let fixture: ComponentFixture<PlannedFormationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannedFormationsComponent]
    });
    fixture = TestBed.createComponent(PlannedFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
