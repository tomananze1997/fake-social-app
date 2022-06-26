import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: ':id/info', component: UserComponent },
      { path: ':id/albums', component: AlbumsComponent },
      { path: ':id/posts', component: PostsComponent },
    ],
  },
  { path: 'albums', component: AlbumsComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
