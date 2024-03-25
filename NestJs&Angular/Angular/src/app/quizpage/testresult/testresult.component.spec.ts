import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestresultComponent } from './testresult.component';

describe('TestresultComponent', () => {
  let component: TestresultComponent;
  let fixture: ComponentFixture<TestresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestresultComponent]
    });
    fixture = TestBed.createComponent(TestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
