import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postsSubscription: Subscription;
  postList: Post[];
  userPostStyle = false;

  constructor(
    private postsService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('users')) {
      this.route.params.subscribe((params: Params) => {
        this.postsService
          .getUserPosts(params['id'])
          .subscribe((data: Post[]) => {
            this.postList = data;
          });
      });
      this.userPostStyle = true;
    } else {
      this.postsService.posts.subscribe((data: Post[]) => {
        this.postList = data;
      });
      this.userPostStyle = false;
    }
  }
}
