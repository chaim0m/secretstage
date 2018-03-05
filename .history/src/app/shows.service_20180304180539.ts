import { Injectable } from '@angular/core';
import Artist from './models/artist';
import Show from './models/show';


const artist : Artist[]=[];


const shows: Show[] = [
  {_id: 1, artist: new Artist(), title: 'The best show is town', description: 'intimate evenning in a unique spot in the city', price:60 ,  eventType:'House Concert' , host:'Maor Peretz',  map: 'url map', ticketQuantity: 50,  date: new Date,  time: '21:00'},
  {_id: 2, artist: new Artist() , title: 'Magical evening of acoustic sounds', description: 'intimate evenning in a unique spot in the city', price:40 ,  eventType:'House Concert' , host:'Avi Gueta',  map: 'url map', ticketQuantity: 50,  date: new Date,  time: '20:00'},
  {_id: 1, artist: new Artist(), title: 'Piano show with Anat Melamed', description: 'intimate evenning in a unique spot in the city', price:60 ,  eventType:'House Concert' , host:'Meny Berger',  map: 'url map', ticketQuantity: 80,  date: new Date,  time: '21:00'},
  {_id: 1, artist: new Artist(), title: 'The best show is town', description: 'intimate evenning in a unique spot in the city', price:60 ,  eventType:'House Concert' , host:'Maor Peretz',  map: 'url map', ticketQuantity: 50,  date: new Date,  time: '20:00'}
 
];
@Injectable()
export class ShowsService {

  constructor() { }

}
