import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'json-placeholder-exercise';

  constructor(
    private postService: PostService,
    private userService: UserService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.userService.getInitialUsers();
    this.postService.getInitialPosts();
    this.albumService.getInitialAlbums();
  }
}
