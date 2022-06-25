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
  photos = new ReplaySubject<Photo[]>();

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
}
