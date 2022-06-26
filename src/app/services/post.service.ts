import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Post } from '../interfaces/post';
import { Comment } from '../interfaces/comment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts = new ReplaySubject<Post[]>();

  constructor(private http: HttpClient) {}

  getInitialPosts() {
    this.http
      .get<Post[]>(`${environment.appUrl}/posts`)
      .subscribe((data: Post[]) => this.posts.next(data));
  }

  getUserPosts(id: number) {
    return this.http.get<Post[]>(`${environment.appUrl}/users/${id}/posts`);
  }

  getPostComment(id: number) {
    return this.http.get<Comment[]>(
      `${environment.appUrl}/posts/${id}/comments`
    );
  }
}
