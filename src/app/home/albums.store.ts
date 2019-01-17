import {Injectable} from '@angular/core';
import {Album} from './album';
import {Observable, of} from 'rxjs';

@Injectable()
export class AlbumsStore {
  private albums: Album[] = [
    {
      id: '1',
      title: 'Sgt. Peppers Lonely Hearts Club Band',
      artist: 'The Beatles'
    },
    {
      id: '2',
      title: 'Thriller',
      artist: 'Michael Jackson'
    }
  ];

  fetchAll(): Observable<Album[]> {
    return of(this.albums);
  }

  fetchById(id: string): Observable<Album> {
    const album = this.albums.filter(a => a.id === id)[0];
    return of(album);
  }
}
