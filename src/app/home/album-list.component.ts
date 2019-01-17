import {Component, OnInit} from '@angular/core';
import {AlbumsStore} from './albums.store';
import {Album} from './album';

@Component({
  selector: 'album-list',
  template: `
    <ng-container *ngIf="albums">
      <ion-list>
        <ion-item
          *ngFor="let album of albums"
          routerLink="{{album.id}}"
          routerDirection="forward"
        >
          {{album.title}}
        </ion-item>
      </ion-list>
    </ng-container>
  `
})
export class AlbumListComponent implements OnInit {

  albums: Album[];

  constructor(private albumStore: AlbumsStore) {
  }

  ngOnInit() {
    this.albumStore.fetchAll().subscribe(albums => this.albums = albums);
  }

}