import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // crear formularios y usar data-binding 'modificar valor en vista al backend y viceversa'
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home.components';
import { UserEditComponent } from './components/user-edit.components';

import { ArtistListComponent } from './components/artist-list.components';
import { ArtistAddComponent } from './components/artist-add.components';
import { ArtistEditComponent } from './components/artist-edit.components';
import { ArtistDetailComponent } from './components/artist-detail.components';

import { AlbumAddComponent } from './components/album-add.components';
import { AlbumEditComponent } from './components/album-edit.components';
import { AlbumDetailComponent } from './components/album-detail.components';

import { SongAddComponent } from './components/song-add.components';
import { SongEditComponent } from './components/song-edit.components';

import { PlayerComponent } from './components/player.components';

@NgModule({
  declarations: [ // cargar componentes y directivas
    AppComponent,
    HomeComponent,
    UserEditComponent,
    ArtistListComponent,
    ArtistAddComponent,
    ArtistEditComponent,
    ArtistDetailComponent,
    AlbumAddComponent,
    AlbumEditComponent,
    AlbumDetailComponent,
    SongAddComponent,
    SongEditComponent,
    PlayerComponent
  ],
  imports: [ // cargar modulos
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders ], // cargar servicios
  bootstrap: [AppComponent] // indicar componente principal
})
export class AppModule { }