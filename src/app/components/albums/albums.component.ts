import { Component, OnDestroy, OnInit } from '@angular/core';
import { Album } from '../../interfaces/album';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albumSubscription: Subscription;
  photoSubscription: Subscription;
  albumList: Album[];
  albumPhotos: Photo[];
  modalOpen = false;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('users')) {
      this.route.params.subscribe((param: Params) => {
        this.albumService.getUserAlbums(param['id']);
      });
      this.albumSubscription = this.albumService.userAlbums.subscribe(
        (data: Album[]) => {
          this.albumList = data;
        }
      );
    } else {
      this.albumService.getInitialAlbums();
      this.albumSubscription = this.albumService.albums.subscribe(
        (data: Album[]) => (this.albumList = data)
      );
    }
  }

  ngOnDestroy() {
    this.albumSubscription.unsubscribe();
    if (this.photoSubscription) {
      this.photoSubscription.unsubscribe();
    }
  }

  onAlbumClick(id: number) {
    this.modalOpen = true;
    this.albumService.getAlbumPhotos(id);
    this.photoSubscription = this.albumService.albumPhotos.subscribe(
      (data: Photo[]) => (this.albumPhotos = data)
    );
  }

  onModalButtonClose() {
    this.modalOpen = false;
    this.photoSubscription.unsubscribe();
  }
}
