import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { PostsService } from '../../services/PostsService/posts.service';
import { IPost } from '../../interfaces/IPosts';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Subscription } from 'rxjs';
import { ErrorService } from '../../services/Error-service/error.service';
import { SnackbarService } from '../../services/Snackbar-service/snackbar.service';

@Component({
  selector: 'app-posts-read-edit-modal',
  templateUrl: './posts-read-edit-modal.component.html',
  styleUrls: ['./posts-read-edit-modal.component.scss']
})
export class PostsReadEditModalComponent extends BaseModalComponent implements OnInit, OnDestroy {
  postData: IPost;
  post!: IPost;
  @Input() isEditMode!: boolean;
  updateSubscription!: Subscription;
  postId: number = 1;


  constructor(
    private postsService: PostsService, 
    private apiService: ApiService,
    private errorService: ErrorService,
    private snackbarService: SnackbarService
  ) {
    super();
    this.postData = { title: '', body: '', id: 1, userId: 1 };
  }

  ngOnInit(): void {
    this.postId = this.postsService.getReadEditId();
    const post = this.postsService.getPost(this.postId)
    if(post) {
      this.postData = {...post};
      this.post = post;
    }
  }

  ngOnDestroy(): void {
    if(this.updateSubscription) this.updateSubscription.unsubscribe();
  }

  enterEditMode(): void {
    this.isEditMode = true;
  }

  exitEditMode() {
    this.isEditMode = false;
  }

  saveAndExit() {
    this.apiService.updatePost(this.postData.id, {title: this.postData.title, body: this.postData.body}).subscribe({
      next: (responseData: any) => {
        console.log(responseData);
        this.onClose();
        this.snackbarService.showSuccessMessage("Successfully updated post");
        if(this.post) {
          this.post.body = responseData.body;
          this.post.title = responseData.title;
        }
        
      },
      error: (error) => {
        this.errorService.handleError(error);
      }
    })

  }

}
