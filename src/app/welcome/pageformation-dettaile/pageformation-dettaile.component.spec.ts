import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageformationDettaileComponent } from './pageformation-dettaile.component';

describe('PageformationDettaileComponent', () => {
  let component: PageformationDettaileComponent;
  let fixture: ComponentFixture<PageformationDettaileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageformationDettaileComponent]
    });
    fixture = TestBed.createComponent(PageformationDettaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
