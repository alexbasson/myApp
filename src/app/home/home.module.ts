import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {AlbumListComponent} from './album-list.component';
import {AlbumsStore} from './albums.store';
import {AlbumDetailComponent} from './album-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: ':id',
        component: AlbumDetailComponent
      }
    ])
  ],
  declarations: [
    HomePage,
    AlbumListComponent,
    AlbumDetailComponent,
  ],
  providers: [
    AlbumsStore,
  ]
})
export class HomePageModule {}
