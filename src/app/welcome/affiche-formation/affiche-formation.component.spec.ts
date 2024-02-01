import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheFormationComponent } from './affiche-formation.component';

describe('AfficheFormationComponent', () => {
  let component: AfficheFormationComponent;
  let fixture: ComponentFixture<AfficheFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficheFormationComponent]
    });
    fixture = TestBed.createComponent(AfficheFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
