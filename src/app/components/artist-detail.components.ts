import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';
import { ArtistService } from '../services/artist.service';
import { Artist } from '../models/artist';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

import { UploadService } from '../services/upload.service';
import { GLOBAL } from '../services/global';


@Component({
  selector: 'artist-detail',
  templateUrl: '../views/artist-detail.html',
  providers: [UserService, ArtistService, AlbumService]
})

export class ArtistDetailComponent implements OnInit {

	public titulo: string;
	public artist:Artist;
	public albums:Album[];
	public identity;
	public token;
	public url: string;
	public alertMessage;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService,
		private _artistService: ArtistService,
		private _albumService: AlbumService
	){

		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
	}

	ngOnInit(){
		//console.log("artist-edit.component.ts load...");
		// llamar al metodo para sacar registro por su id
		this.getArtist();
	}

	getArtist(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			this._artistService.getArtist(this.token, id).subscribe(
				response => {
					if(!response.artist){
						this._router.navigate(['/']);
					}else{
						this.artist = response.artist;
						
						this._albumService.getAlbums(this.token, response.artist._id).subscribe(
							response => {
								if( response.albums.length == 0 ){
									this.alertMessage = 'No hay albums.';
								}else{
									this.albums = response.albums;
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
						);
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

	public confirm;
	onDeleteConfirm(id){
		this.confirm = id;
	}

	onCancelAlbum(){
		this.confirm = null;
	}

	onDeleteAlbum(id){
		this._albumService.deleteAlbum(this.token, id).subscribe(
			response => {
				if(!response.albumRemoved){
					alert('Error server');
				}
				this.getArtist();
			},
			error => {
              var errorMessage = <any>error;

              if(errorMessage != null){
                var body = JSON.parse(error._body);
                //this.alertMessage = body.message;
                console.log(error);
              }
			}
		);
	}

}