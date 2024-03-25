import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapitemComponent } from './roadmapitem.component';

describe('RoadmapitemComponent', () => {
  let component: RoadmapitemComponent;
  let fixture: ComponentFixture<RoadmapitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadmapitemComponent]
    });
    fixture = TestBed.createComponent(RoadmapitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
