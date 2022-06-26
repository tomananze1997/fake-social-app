import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  userSelected = false;
  userId: number;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.users.subscribe((data: User[]) => (this.users = data));
    if (this.router.url.includes('info')) {
      this.userSelected = true;
    }
  }

  ngOnDestroy() {
    this.userSelected = false;
  }

  toggleUser(id: number) {
    this.userSelected = true;
    this.userId = id;
  }
}
