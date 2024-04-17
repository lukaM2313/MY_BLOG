import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { IUser } from '../../interfaces/IUser';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-users-filter-modal',
  templateUrl: './users-filter-modal.component.html',
  styleUrls: ['./users-filter-modal.component.scss']
})
export class UsersFilterModalComponent extends BaseModalComponent implements OnInit  {
  users: IUser[] = [];
  selectAll: boolean = false;

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit(): void {
    this.users = this.userService.getData();
    console.log(this.users);
  }

  selectAllUsers() {
    this.users.forEach((user) => {
      user.selected = !this.selectAll;
    });
  }

  filter() {
    const filteredUsers = this.users.filter((user) => user.selected);
    const filteredIds = filteredUsers.map((user) => {
      return user.id
    });
    this.userService.updateSelectedUsers(filteredIds);
    this.onClose();
  }

}
