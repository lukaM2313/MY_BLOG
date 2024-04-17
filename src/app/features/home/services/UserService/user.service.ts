import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { DataService } from '../DataService/data.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService<IUser[]> {
  private selectedUsersSubject = new BehaviorSubject<number[]>([]);
  selectedUsers$: Observable<number[]> = this.selectedUsersSubject.asObservable();
  
  constructor() {
    super();
  }

  addSelected() {
    this.data.forEach((user) => {
      user.selected = false;
    })
  }

  getUserIds() {
    console.log(this.data);
    return this.data.map((user: IUser) => {
      return user.id;
    })
  }

  updateSelectedUsers(selectedUserIds: number[]) {
    this.selectedUsersSubject.next(selectedUserIds);
  }


}
