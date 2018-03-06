import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistprofile',
  templateUrl: './artistprofile.component.html',
  styleUrls: ['./artistprofile.component.css']
})
export class ArtistprofileComponent implements OnInit {

  constructor(private artistservice: ArtistsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  getMovie(params) {this.artistservice.displayArtist(num).subscribe(data => {
      this.artist = data;
    });
  }
}
