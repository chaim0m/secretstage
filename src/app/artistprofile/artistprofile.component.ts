import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service'
import Artist from '../models/artist';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { NgForOf } from '@angular/common';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.css']
})


export class ArtistprofileComponent implements OnInit {
  artists: Artist[];
  id: String;
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;
  

  constructor(private artistsService: ArtistsService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    // #enddocregion trust-url
    this.updateVideoUrl('PUBnlbjZFAI');
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.artistsService.getArtistById(this.id).subscribe(
      artists => {
        this.artists = artists,
        this.updateVideoUrl(this.artists.linktosongs)
      },
      error => {
        console.log(error)
      }
    )
  }

}
