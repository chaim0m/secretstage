import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import Artist from '../models/artist';

@Component({
  selector: 'artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css']
})
export class ArtistlistComponent implements OnInit {
  artists: any;
  title: string;
  isloading: boolean=true;
  constructor(private artistservice: ArtistsService) { }

  ngOnInit() {
    this.title = "Artist List"
    // this.artists = this.artistservice.getArtists();
    this.artistservice.getArtists().subscribe(artists=>{this.artists = artists; this.isloading=false; console.log(this.artists);}, 
    error=>{console.log(error)})
  }
  // displayProfile(artist: Artist){
  //   this.dataService.displayProfile(artist);
  // }

}
