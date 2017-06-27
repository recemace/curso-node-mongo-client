import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';

import { SongService } from '../services/song.service';
import { Song } from '../models/song';

@Component({
  selector: 'song-add',
  templateUrl: '../views/song-add.html',
  providers: [UserService, SongService]
})

export class SongAddComponent implements OnInit {

	public titulo: string;
	public song: Song;
	public identity;
	public token;
	public url: string;
	public alertMessage;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _songService: SongService
	){
		this.titulo = 'New Song';

		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.song = new Song('','','','','');
	}

	ngOnInit(){

	}

	onSubmit(){
		this._route.params.forEach((params: Params) => {
			let album_id = params['album'];
			this.song.album = album_id;

			this._songService.addSong(this.token, this.song).subscribe(
				response => {
					if(!response.song){
						this.alertMessage = 'Server error.';
					}else{
						this.alertMessage = 'the song add ok.';
						this.song = response.song;
						this._router.navigate(['/song-edit', response.song._id]);
					}
				},
				error => {
	              var errorMessage = <any>error;

	              if(errorMessage != null){
	                var body = JSON.parse(error._body);
	                this.alertMessage = body.message;
	                console.log(error);
	              }
				}
			)


		});
	}

/*
	onSubmit(){
		this._route.params.forEach((params: Params) => {
			let artist_id = params['artist'];
			this.album.artist = artist_id;

			this._albumService.addAlbum(this.token, this.album).subscribe(
				response => {
					if(!response.album){
						this.alertMessage = 'Error en el servidor.';
					}else{
						this.alertMessage = 'El album se ha creado correctamente.';
						this.album = response.album;
						this._router.navigate(['/album-edit', response.album._id]);
					}
				},
				error => {
	              var errorMessage = <any>error;

	              if(errorMessage != null){
	                var body = JSON.parse(error._body);
	                this.alertMessage = body.message;
	                console.log(error);
	              }
				}
			)

		});
		console.log(this.album);
	}
*/
}