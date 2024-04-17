import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsBodyComponent } from './posts-body.component';

describe('PostsBodyComponent', () => {
  let component: PostsBodyComponent;
  let fixture: ComponentFixture<PostsBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsBodyComponent]
    });
    fixture = TestBed.createComponent(PostsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
