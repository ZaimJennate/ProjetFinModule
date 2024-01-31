import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecategorieComponent } from './tablecategorie.component';

describe('TablecategorieComponent', () => {
  let component: TablecategorieComponent;
  let fixture: ComponentFixture<TablecategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablecategorieComponent]
    });
    fixture = TestBed.createComponent(TablecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
