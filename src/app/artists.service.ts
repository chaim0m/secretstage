import { Injectable } from '@angular/core';
import Artist from './models/artist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// const artists: Artist[] = [
//   {_id: 1, name: 'Rex', cover: 'http://bit.ly/2Fc981Q', genre: ['Rock', 'Indie','Alternative'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
//   {_id: 2, name: 'Woof', cover: 'url', genre: ['Pop', 'Metal','Blues'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
//   {_id: 3, name: 'Chuck', cover: 'url', genre: ['Jazz'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
//   {_id: 4, name: 'Barkley', cover: 'url', genre: ['Dance', 'Hip-hop'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
//   {_id: 5, name: 'Prince', cover: 'url', genre: ['Jewish', 'Goyish','Marshian'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']}
// ];
// const shows: Show[] = [
//   {_id:1, artist: 'Woof',title: 'Barkathon',description: 'An event dedicated to barking very loud',price: 0,eventType: ['Public','Pub'],host: 'Shachar', map: 'url', ticketQuantity: 50 }
  
// ]
@Injectable()
export class ArtistsService {
  // perfomers: Artist[] = artists;
  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    // console.log("Test")
    // return this.perfomers;
    return this.http.get<Artist[]>('/api/artists');
  }

  getArtistById(id): Observable<Artist> {
    return this.http.get<Artist>('/api/artists/'+id);
  }

}
