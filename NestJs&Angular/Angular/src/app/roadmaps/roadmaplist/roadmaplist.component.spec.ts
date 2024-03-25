import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmaplistComponent } from './roadmaplist.component';

describe('RoadmaplistComponent', () => {
  let component: RoadmaplistComponent;
  let fixture: ComponentFixture<RoadmaplistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadmaplistComponent]
    });
    fixture = TestBed.createComponent(RoadmaplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
