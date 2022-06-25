import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private postService:PostService, private albumService:AlbumService) { }

  ngOnInit(): void {
  }
  onResetData(){
if (confirm("Do you really want to reset all the data?")){
    this.userService.getInitialUsers()
  this.postService.getInitialPosts()
  this.postService.getInitialComments()
  this.albumService.getInitialAlbums()
  this.albumService.getInitialPhotos()
}else {
  alert("Cenceled!")
}
  }
}
