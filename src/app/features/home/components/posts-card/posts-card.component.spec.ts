import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCardComponent } from './posts-card.component';
import { EventEmitter, Output } from '@angular/core';

describe('PostsCardComponent', () => {
  let component: PostsCardComponent;
  let fixture: ComponentFixture<PostsCardComponent>; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsCardComponent]
    });
    fixture = TestBed.createComponent(PostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
