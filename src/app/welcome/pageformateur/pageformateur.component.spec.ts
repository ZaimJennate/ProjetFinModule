import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageformateurComponent } from './pageformateur.component';

describe('PageformateurComponent', () => {
  let component: PageformateurComponent;
  let fixture: ComponentFixture<PageformateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageformateurComponent]
    });
    fixture = TestBed.createComponent(PageformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
