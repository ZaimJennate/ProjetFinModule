import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinforfreeComponent } from './joinforfree.component';

describe('JoinforfreeComponent', () => {
  let component: JoinforfreeComponent;
  let fixture: ComponentFixture<JoinforfreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinforfreeComponent]
    });
    fixture = TestBed.createComponent(JoinforfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
