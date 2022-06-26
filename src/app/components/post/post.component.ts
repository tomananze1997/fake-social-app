import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Comment } from '../../interfaces/comment';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  shortenText = true;
  openComments = false;
  comments: Comment[] = [];
  currentUser: User;
  @Input() post: Post;
  @Input() userPostStyle = false;

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.postService
      .getPostComment(this.post.id)
      .subscribe((value: Comment[]) => (this.comments = value));
    this.userService
      .getSingleUser(this.post.userId)
      .subscribe((value: User) => (this.currentUser = value));
  }

  ngOnDestroy() {
    this.shortenText = true;
    this.openComments = false;
  }
}
