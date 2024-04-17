import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-nav',
  templateUrl: './posts-nav.component.html',
  styleUrls: ['./posts-nav.component.scss']
})
export class PostsNavComponent {
  isUsersModalOpen: boolean = false;
  isAddPostModalOpen: boolean = false;

  constructor() {}

  openUsersModal(): void {
    this.isUsersModalOpen = true;
  }

  openAddPostModal(): void {
    this.isAddPostModalOpen = true;
  }

  closeAddPostModal(): void {
    this.isAddPostModalOpen = false;
  }

  closeModal(): void {
    this.isUsersModalOpen = false;
  }

  
}
