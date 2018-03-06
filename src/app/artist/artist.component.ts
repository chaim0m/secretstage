import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  Artist  from '../models/artist';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {
  @Input() artist: Artist;
  // @Input() btnText: string;
  // @Output() innerClick: EventEmitter<Artist> = new EventEmitter<Artist>();
  
  constructor(artistservice: ArtistsService) { }

  ngOnInit() {
    
  }

  // displayProfile(id){
  //   this.artistservice.getArtistById(id)
  // }
}