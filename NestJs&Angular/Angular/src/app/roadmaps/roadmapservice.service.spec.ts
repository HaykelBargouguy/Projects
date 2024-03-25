import { TestBed } from '@angular/core/testing';

import { RoadmapserviceService } from './roadmapservice.service';

describe('RoadmapserviceService', () => {
  let service: RoadmapserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadmapserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
