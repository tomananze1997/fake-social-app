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
    return this.http.get<Photo[]>(`${environment.appUrl}/photos`);
  }

  getUserAlbums(id: number) {
    return this.http.get<Album[]>(`${environment.appUrl}/users/${id}/albums`);
  }

  getAlbumPhotos(id: number) {
    return this.http.get<Photo[]>(`${environment.appUrl}/albums/${id}/photos`);
  }
}
