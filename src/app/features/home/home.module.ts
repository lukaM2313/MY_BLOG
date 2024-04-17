import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsNavComponent } from './components/posts-nav/posts-nav.component';
import { UsersFilterModalComponent } from './components/users-filter-modal/users-filter-modal.component';
import { PostsBodyComponent } from './components/posts-body/posts-body.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';
import { PostsReadEditModalComponent } from './components/posts-read-edit-modal/posts-read-edit-modal.component';
import { BaseModalComponent } from './components/base-modal/base-modal.component';
import { AddPostModalComponent } from './components/add-post-modal/add-post-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserIdFilterPipe } from './pipes/user-id-filter.pipe';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    PostsNavComponent,
    UsersFilterModalComponent,
    PostsBodyComponent,
    PostsCardComponent,
    PostsReadEditModalComponent,
    BaseModalComponent,
    AddPostModalComponent,
    UserIdFilterPipe,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class HomeModule { }
