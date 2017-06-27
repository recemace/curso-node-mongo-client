import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { HomeComponent } from './components/home.components';
import { UserEditComponent } from './components/user-edit.components';

// import artist components
import { ArtistListComponent } from './components/artist-list.components';
import { ArtistAddComponent } from './components/artist-add.components';
import { ArtistEditComponent } from './components/artist-edit.components';
import { ArtistDetailComponent } from './components/artist-detail.components';

// import album components
import { AlbumAddComponent } from './components/album-add.components';
import { AlbumEditComponent } from './components/album-edit.components';
import { AlbumDetailComponent } from './components/album-detail.components';

// import song components
import { SongAddComponent } from './components/song-add.components';
import { SongEditComponent } from './components/song-edit.components';

import { PlayerComponent } from './components/player.components';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},

	{path: 'artists/:page', component: ArtistListComponent},
	{path: 'artist-add', component: ArtistAddComponent},
	{path: 'artist-edit/:id', component: ArtistEditComponent},
	{path: 'artist/:id', component: ArtistDetailComponent},

	{path: 'album-add/:artist', component: AlbumAddComponent},
	{path: 'album-edit/:id', component: AlbumEditComponent},
	{path: 'album/:id', component: AlbumDetailComponent},

	{path: 'song-add/:album', component: SongAddComponent},
	{path: 'song-edit/:id', component: SongEditComponent},

	{path: 'mis-datos', component: UserEditComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);