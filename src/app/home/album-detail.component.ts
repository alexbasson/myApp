import {Component, OnInit} from '@angular/core';
import {Album} from './album';
import {AlbumsStore} from './albums.store';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'album-detail',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title *ngIf="album">
          {{album.title}}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>{{album.artist}}</h1>
      <h2>{{album.title}}</h2>
    </ion-content>
  `
})
export class AlbumDetailComponent implements OnInit {

  album: Album;

  constructor(private activatedRoute: ActivatedRoute, private albumsStore: AlbumsStore) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.albumsStore.fetchById(id).subscribe(album => this.album = album)
  }

}
