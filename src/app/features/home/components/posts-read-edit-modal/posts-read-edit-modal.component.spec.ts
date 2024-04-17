import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsReadEditModalComponent } from './posts-read-edit-modal.component';

describe('PostsReadEditModalComponent', () => {
  let component: PostsReadEditModalComponent;
  let fixture: ComponentFixture<PostsReadEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsReadEditModalComponent]
    });
    fixture = TestBed.createComponent(PostsReadEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
