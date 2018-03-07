import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows.service';
import { Show } from '../models/show';

@Component({
  selector: 'app-show-page-details',
  templateUrl: './show-page-details.component.html',
  styleUrls: ['./show-page-details.component.css']
})
export class ShowPageDetailsComponent implements OnInit {

  shows: Show[];

  constructor(private showService: ShowsService) { }

  ngOnInit() {
  }

}
