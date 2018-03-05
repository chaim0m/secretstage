import { Injectable } from '@angular/core';
import Artist from './models/artist';
import Show from './models/show';
const artist = new Artist();


const shows: Show[] = [
  {_id: 1, artist: 'sdf', title: 'The best show is town', description: 'intimate evenning in a unique spot in the city', price:60 ,  eventType:'House Concert' , host:'Maor Peretz',  map: 'url map', ticketQuantity: 50,  date: new Date,  time: '20:00'},
  {_id: 1, artist: 'Maor Peretz' , title: 'The best show is town', description: 'intimate evenning in a unique spot in the city', price:60 ,  eventType:'House Concert' , host:'Maor Peretz',  map: 'url map', ticketQuantity: 50,  date: new Date,  time: '20:00'},
 
];
@Injectable()
export class ShowsService {

  constructor() { }

}
