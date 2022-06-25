import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts = new ReplaySubject<Post[]>();
  comments = new ReplaySubject<Comment[]>();

  constructor(private http: HttpClient) {}
  getInitialPosts() {
    this.http
      .get<Post[]>(`${environment.appUrl}/posts`)
      .subscribe((data: Post[]) => this.posts.next(data));
  }
  getInitialComments() {
    this.http
      .get<Comment[]>(`${environment.appUrl}/comments`)
      .subscribe((data: Comment[]) => this.comments.next(data));
  }
}
