import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifierFormationComponent } from './planifier-formation.component';

describe('PlanifierFormationComponent', () => {
  let component: PlanifierFormationComponent;
  let fixture: ComponentFixture<PlanifierFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanifierFormationComponent]
    });
    fixture = TestBed.createComponent(PlanifierFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
