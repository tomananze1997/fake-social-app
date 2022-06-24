import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {AlbumsComponent} from "./components/albums/albums.component";
import {PhotosComponent} from "./components/photos/photos.component";
import {PostsComponent} from "./components/posts/posts.component";

const routes: Routes = [
  {  path:"", component:HomeComponent, pathMatch:"full"},
  {  path:"users", component:UsersComponent, children:[
      {  path:":id", component:UserComponent},
      {  path:":id/albums", component:AlbumsComponent},
      {  path:":id/albums/:albumId", component:PhotosComponent},
      {  path:":id/posts", component:PostsComponent},

    ]},
  {  path:"albums", component:AlbumsComponent},
  {  path:"albums/:id/photos", component:PhotosComponent},
  {  path:"posts", component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
