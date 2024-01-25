import { TestBed } from '@angular/core/testing';

import { PlanifierFormationService } from './planifier-formation.service';

describe('PlanifierFormationService', () => {
  let service: PlanifierFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanifierFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
