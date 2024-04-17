import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../interfaces/IPosts';

@Pipe({
  name: 'userIdFilter'
})
export class UserIdFilterPipe implements PipeTransform {

  transform(posts: IPost[], selectedUserIds: number[]): IPost[] {
    if (!selectedUserIds || selectedUserIds.length === 0) {
      return posts;
    }
    return posts.filter(post => selectedUserIds.includes(post.userId));
  }

}
