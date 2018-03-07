import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service'
import Artist from '../models/artist';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { NgForOf } from '@angular/common';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.css']
})


export class ArtistprofileComponent implements OnInit {
  artists: Artist[];
  id: String;
  youtubeUrl = "https://www.youtube.com/watch?v=ZePcZQ3gZ38";
  youtubeId = "ZePcZQ3gZ38";
  constructor(private artistsService: ArtistsService, private route: ActivatedRoute, private embedService: EmbedVideoService) {
  }


  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.artistsService.getArtistById(this.id).subscribe(
      artists => {
        this.artists = artists,
          console.log(this.artists)
      },
      error => {
        console.log(error)
      }
    )
  }

}
