import { Injectable } from '@angular/core';
import Artist from './models/artist';
import Show from './models/show';


const artists: Show[] = [
  {_id: 1, name: 'Rex', cover: 'http://bit.ly/2Fc981Q', genre: ['Rock', 'Indie','Alternative'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
  {_id: 2, name: 'Woof', cover: 'url', genre: ['Pop', 'Metal','Blues'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
  {_id: 3, name: 'Chuck', cover: 'url', genre: ['Jazz'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
  {_id: 4, name: 'Barkley', cover: 'url', genre: ['Dance', 'Hip-hop'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']},
  {_id: 5, name: 'Prince', cover: 'url', genre: ['Jewish', 'Goyish','Marshian'], eventType: ['Public', 'house'], description: "Awesome!", socialMedia: ['FB','Twitter','Instagram'], linktosongs: ['url soundcloud', 'url youtube']}
];
@Injectable()
export class ShowsService {

  constructor() { }

}
