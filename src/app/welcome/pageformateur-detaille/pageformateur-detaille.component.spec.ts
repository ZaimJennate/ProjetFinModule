import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageformateurDetailleComponent } from './pageformateur-detaille.component';

describe('PageformateurDetailleComponent', () => {
  let component: PageformateurDetailleComponent;
  let fixture: ComponentFixture<PageformateurDetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageformateurDetailleComponent]
    });
    fixture = TestBed.createComponent(PageformateurDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
