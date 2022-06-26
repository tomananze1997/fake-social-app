import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Subscription } from 'rxjs';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  userSelected = false;
  userId: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users.subscribe((data: User[]) => (this.users = data));
  }

  ngOnDestroy() {
    this.userSelected = false;
  }

  toggleUser(id: number) {
    this.userSelected = true;
    this.userId = id;
  }
}
