import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { PostsService } from '../../services/PostsService/posts.service';
import { IPost } from '../../interfaces/IPosts';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Subscription } from 'rxjs';
import { ErrorService } from '../../services/Error-service/error.service';
import { SnackbarService } from '../../services/Snackbar-service/snackbar.service';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss']
})
export class PostsCardComponent implements OnInit, OnDestroy {
  @Input() id!: number;
  @Output() openModalWithRead: EventEmitter<void> = new EventEmitter<void>();
  @Output() openModalWithEdit: EventEmitter<void> = new EventEmitter<void>();
  post!: IPost | undefined;
  deleteSubscription!: Subscription 
  
  constructor(
    private postsService: PostsService, 
    private apiService: ApiService,
    private errorService: ErrorService,
    private snackbarService: SnackbarService
    ) {}

  ngOnInit(): void {
    this.post = this.postsService.getPost(this.id);
  }

  ngOnDestroy(): void {
    if(this.deleteSubscription) this.deleteSubscription.unsubscribe();
  }

  deletePost() {
    this.deleteSubscription = this.apiService.deletePost(this.id).subscribe({
      next: (deleteData) => {
        this.postsService.deletePost(this.id);
        this.snackbarService.showSuccessMessage("Succesfully deleted post");
      },

      error: (error) => {
        this.errorService.handleError(error);
      }
    })
  }

  readPost() {
    this.openModalWithRead.emit();
  }

  editPost() {
    this.openModalWithEdit.emit();
  }
  

}
