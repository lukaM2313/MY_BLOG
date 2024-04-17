import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/UserService/user.service';
import { ApiService } from 'src/app/core/services/api/api.service';
import { IPost, IPostDataToSend } from '../../interfaces/IPosts';
import { PostsService } from '../../services/PostsService/posts.service';
import { Subscription } from 'rxjs';
import { ErrorService } from '../../services/Error-service/error.service';
import { SnackbarService } from '../../services/Snackbar-service/snackbar.service';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.scss']
})
export class AddPostModalComponent extends BaseModalComponent implements OnInit, OnDestroy {
  postForm: FormGroup;
  userIds: number[] = [1];

  titleIsInvalid: boolean = false;
  bodyIsInvalid: boolean = false;
  userIdIsInvalid: boolean = false;

  addPostSubscription!: Subscription;

  constructor(
      private fb: FormBuilder, 
      private userService: UserService, 
      private apiService: ApiService,
      private postsService: PostsService,
      private errorService: ErrorService,
      private snackbarService: SnackbarService
  ) {
    super();
    this.postForm = this.fb.group({
      userId: [null, Validators.required],
      title: new FormControl("", Validators.required),
      body: new FormControl("", Validators.required)
    })
  }

  ngOnInit(): void {
    this.userIds = this.userService.getUserIds();
  }

  ngOnDestroy(): void {
    if(this.addPostSubscription) this.addPostSubscription.unsubscribe();
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.titleIsInvalid = false;
      this.bodyIsInvalid = false;
      this.userIdIsInvalid = false;

      const postData: IPostDataToSend = {
        userId: this.postForm.value.userId,
        title: this.postForm.value.title,
        body: this.postForm.value.body
      }

      this.addPostSubscription = this.apiService.addPost(postData).subscribe({
        next: (addPostData) => {
          this.postsService.addPost(addPostData as IPost);
          this.onClose();
          this.snackbarService.showSuccessMessage("Successfully added post");
        },
        error: (error) => {
          this.errorService.handleError(error);
        }
      });
    } else {
      if (this.postForm.controls['title'].hasError('required')) {
        this.titleIsInvalid = true;
      } else {this.titleIsInvalid = false}
      if (this.postForm.controls['body'].hasError('required')) {
        this.bodyIsInvalid = true;
      } else {this.bodyIsInvalid = false}
      if (this.postForm.controls['userId'].hasError('required')) {
        this.userIdIsInvalid = true;
      } else {this.userIdIsInvalid = false;}
    }
  }

}
