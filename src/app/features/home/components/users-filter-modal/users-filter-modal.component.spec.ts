import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFilterModalComponent } from './users-filter-modal.component';

describe('UsersFilterModalComponent', () => {
  let component: UsersFilterModalComponent;
  let fixture: ComponentFixture<UsersFilterModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersFilterModalComponent]
    });
    fixture = TestBed.createComponent(UsersFilterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
