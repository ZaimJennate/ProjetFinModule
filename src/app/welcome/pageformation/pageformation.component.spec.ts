import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageformationComponent } from './pageformation.component';

describe('PageformationComponent', () => {
  let component: PageformationComponent;
  let fixture: ComponentFixture<PageformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageformationComponent]
    });
    fixture = TestBed.createComponent(PageformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
