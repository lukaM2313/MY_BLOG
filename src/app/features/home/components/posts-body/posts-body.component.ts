import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../services/PostsService/posts.service';
import { IPost } from '../../interfaces/IPosts';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { UserService } from '../../services/UserService/user.service';
import { ErrorService } from '../../services/Error-service/error.service';

@Component({
  selector: 'app-posts-body',
  templateUrl: './posts-body.component.html',
  styleUrls: ['./posts-body.component.scss']
})
export class PostsBodyComponent implements OnInit, OnDestroy {
  posts: IPost[] = [] 
  postsSubscription!: Subscription;
  postsFilterSubscrription!: Subscription;
  isPostreadEditModalVisible: boolean = false;
  isEditMode: boolean = false;
  public selectedUsersIds: number[] = [];

  constructor(
    private postsService: PostsService, 
    private apiService: ApiService, 
    private userService: UserService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.postsSubscription = this.apiService.getPosts().subscribe({
      next: (postsData) => {
        this.postsService.setData(postsData);
        this.posts = postsData;
      },
      error: (error) => {
        this.errorService.handleError(error);
      } 
    });

    this.postsFilterSubscrription = this.userService.selectedUsers$.subscribe({
      next: (userIds: number[]) => {
        this.selectedUsersIds = userIds;
      },
      error: (error) => {
        this.errorService.handleError(error);
      } 
    })
  }

  ngOnDestroy(): void {
    if(this.postsSubscription) this.postsSubscription.unsubscribe();
    if(this.postsFilterSubscrription) this.postsFilterSubscrription.unsubscribe();
  }

  openModalWithRead(id: number) {
    this.isEditMode = false;
    this.openModal(id);
  }

  openModalWithEdit(id: number) {
    this.isEditMode = true;
    this.openModal(id);
  }

  private openModal(id: number) {
    this.isPostreadEditModalVisible = true;
    this.postsService.setReadEditId(id);
  } 

  

  closeModal() {
    this.isPostreadEditModalVisible = false;
  }

  

}
