import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Artist from '../models/artist';

@Component({
  selector: 'artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css']
})
export class ArtistlistComponent implements OnInit {
  artists: Artist[];
  title: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = "Artist List"
    this.artists = this.dataService.getArtists();
  }

}
