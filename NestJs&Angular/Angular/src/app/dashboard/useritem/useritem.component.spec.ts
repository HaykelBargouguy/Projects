import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseritemComponent } from './useritem.component';

describe('UseritemComponent', () => {
  let component: UseritemComponent;
  let fixture: ComponentFixture<UseritemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UseritemComponent]
    });
    fixture = TestBed.createComponent(UseritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
