import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Album } from '../interfaces/album';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  albums = new ReplaySubject<Album[]>();
  userAlbums = new ReplaySubject<Album[]>();
  photos = new ReplaySubject<Photo[]>();
  albumPhotos = new ReplaySubject<Photo[]>();

  constructor(private http: HttpClient) {}

  getInitialAlbums() {
    this.http
      .get<Album[]>(`${environment.appUrl}/albums`)
      .subscribe((data: Album[]) => this.albums.next(data));
  }

  getInitialPhotos() {
    this.http
      .get<Photo[]>(`${environment.appUrl}/photos`)
      .subscribe((data: Photo[]) => this.photos.next(data));
  }

  getUserAlbums(id: number) {
    this.http
      .get<Album[]>(`${environment.appUrl}/users/${id}/albums`)
      .subscribe((data) => this.userAlbums.next(data));
  }

  getAlbumPhotos(id: number) {
    this.http
      .get<Photo[]>(`${environment.appUrl}/albums/${id}/photos`)
      .subscribe((data) => this.albumPhotos.next(data));
  }
}
