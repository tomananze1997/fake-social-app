import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ReplaySubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = new ReplaySubject<User[]>();
  user = new ReplaySubject<User>();

  constructor(private http: HttpClient) {}

  getInitialUsers() {
    this.http
      .get<User[]>(`${environment.appUrl}/users`)
      .subscribe((data) => this.users.next(data));
  }

  addNewUser(user: User) {}

  getSingleUser(id: number) {
    this.http
      .get<User>(`${environment.appUrl}/users/${id}`)
      .subscribe((data) => this.user.next(data));
  }
}
