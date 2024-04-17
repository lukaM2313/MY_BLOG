import { Injectable } from '@angular/core';
import { DataService } from '../DataService/data.service';
import { IPost } from '../../interfaces/IPosts';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService<IPost[]> {

  private readEditId: number = 1;

  constructor() {
    super();
  }

  getPost(id: number): IPost | undefined {
    return this.data.find((item) => item.id === id);
  }

  deletePost(id: number) {
    const index = this.data.findIndex((post) => post.id === id);
    this.data.splice(index, 1);
  }

  addPost(postData: IPost) {
    this.data.push(postData);
  }

  setReadEditId(id: number) {
    this.readEditId = id;
  }

  getReadEditId(): number {
    return this.readEditId;
  }

}
