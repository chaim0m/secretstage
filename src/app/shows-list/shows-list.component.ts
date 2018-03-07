import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows.service';
import Show from '../models/show';


@Component({
  selector: 'showslist',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowsListComponent implements OnInit {
  shows: any;
  title: string;
  isloading: boolean=true;
  constructor(private showservice: ShowsService) { }

  ngOnInit() {
    this.title = "Shows List"
    this.showservice.getShows().subscribe(shows=>{this.shows = shows; this.isloading=false; console.log(this.shows);}, 
    error=>{console.log(error)})
  }

}




